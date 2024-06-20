export const envOrFail = (name: string): string => {
  if (!process.env["name"]) {
    throw new Error(`The required environment variable "${name}" was not set.`);
  }

  return process.env["name"];
};
