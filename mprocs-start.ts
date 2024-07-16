import { v2 as compose } from "docker-compose";
import * as path from "node:path";
import * as dotenv from "dotenv";
import { Client } from "pg";
import http from "http";
import * as fs from "node:fs";

dotenv.config();
if (!process.env.OKUNA_DB_HOST) {
  fs.copyFileSync(".env.template", ".env");
  console.error(
    ".env was created from template, please add your credentials and restart",
  );
  process.exit();
}

const SERVICES = ["db", "hasura", "frontend", "backend"];

const waitForPostgres = (
  config: any,
  MAX_ATTEMPTS: number = 20,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    console.log(`Trying to find ${config.database} db ...`);
    const intervalId = setInterval(async () => {
      const client = new Client(config);
      try {
        await client.connect();
        console.log(`Found ${config.database} db`);
        await client.end();
        clearInterval(intervalId);
        resolve();
      } catch (err: any) {
        if (attempts >= MAX_ATTEMPTS) {
          clearInterval(intervalId);
          reject(
            new Error(
              `Failed to find ${config.database} db after ${MAX_ATTEMPTS} attempts`,
            ),
          );
        }
        (err as unknown as any).errors
          ? console.log("Errors " + err.errors)
          : console.log("Error " + err);

        attempts++;
      }
    }, 1000);
  });
};

const waitForPubsub = (
  config: any,
  MAX_ATTEMPTS: number = 20,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const url = `http://${config.host}/v1/projects/${config.projectId}/topics`;
    console.log(`Trying to to find pubsub emulator at ${url} ...`);

    const checkEmulatorStatus = () => {
      http
        .get(url, (res) => {
          if (res.statusCode === 200) {
            clearInterval(interval);
            console.log(`Found pubsub emulator`);
            resolve();
          }
        })
        .on("error", () => {
          if (attempts >= MAX_ATTEMPTS) {
            clearInterval(interval);
            reject(
              new Error(
                `Failed to find pubsub emulator after ${MAX_ATTEMPTS} of attempts`,
              ),
            );
          }
          attempts++;
        });
    };

    const interval = setInterval(checkEmulatorStatus, 1000);
  });
};

const replaceDockerInternalHostname = (host: string) => {
  return host.replace("host.docker.internal", "127.0.0.1");
};

(async () => {
  ["SIGINT", "SIGUSR1", "SIGUSR2", "SIGTERM"].forEach((exitEventType) => {
    process.on(exitEventType, () => {
      console.log("Stopping gracefully ...");
      compose.downMany(SERVICES, {
        callback: (chunk: Buffer) => {
          process.stdout.write(chunk);
        },
      });
    });
  });

  await waitForPostgres({
    database: "okuna",
    host: replaceDockerInternalHostname(process.env.OKUNA_DB_HOST!!),
    port: process.env.OKUNA_DB_PORT,
    user: process.env.OKUNA_DB_USER,
    password: process.env.OKUNA_DB_PASSWORD,
  });

  await waitForPubsub({
    host: replaceDockerInternalHostname(process.env.PUBSUB_EMULATOR_HOST!!),
    topicName: process.env.PUBSUB_TOPIC_NAME,
    projectId: process.env.PUBSUB_PROJECT_ID,
  });

  await compose.upMany(SERVICES, {
    cwd: path.join(__dirname),
    log: true,
  });

  await compose.logs(SERVICES, {
    follow: true, // this keeps the terminal open
    callback: (chunk: Buffer) => {
      process.stdout.write(chunk);
    },
  });
})();
