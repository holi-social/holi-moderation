import {
  Configuration,
  Identity,
  IdentityApi,
  JsonPatchOpEnum,
} from "@ory/client";
import { envOrFail } from "./utils";

export class Ory {
  static fromEnvironment() {
    return Ory.withApiKey(envOrFail("ORY_API_KEY"));
  }

  static withApiKey(apiKey: string) {
    return new Ory(new IdentityApi(new Configuration({ apiKey })));
  }

  constructor(private readonly identity: IdentityApi) {}

  public async deactivateUser(email: string): Promise<void> {
    const identity = await this.findIdentity(email);
    if (identity === null) {
      throw new Error(`User with email "${email}" not found`);
    }

    await this.terminateAllSessions(identity.id);
    await this.updateIdentityState(identity.id, "inactive");
  }

  public async activateUser(email: string): Promise<void> {
    const identity = await this.findIdentity(email);
    if (identity === null) {
      throw new Error(`User with email "${email}" not found`);
    }

    await this.updateIdentityState(identity.id, "active");
  }

  public async findIdentity(email: string): Promise<Identity | null> {
    const { data } = await this.identity.listIdentities({
      credentialsIdentifier: email,
    });

    if (data.length > 1) {
      throw new Error("found multiple identities");
    }

    if (data.length === 0) {
      return null;
    }

    return data[0];
  }

  public async terminateAllSessions(identityId: string): Promise<void> {
    await this.identity.deleteIdentitySessions({ id: identityId });
  }

  public async updateIdentityState(
    identityId: string,
    state: "active" | "inactive",
  ): Promise<void> {
    await this.identity.patchIdentity({
      id: identityId,
      jsonPatch: [
        {
          op: JsonPatchOpEnum.Replace,
          value: state,
          path: "/state",
        },
      ],
    });
  }
}
