import {
  Configuration,
  Identity,
  IdentityApi,
  JsonPatchOpEnum,
} from "@ory/client";
import { envOrFail } from "./utils";

export class Ory {
  private readonly config: Configuration;
  private readonly identity: IdentityApi;

  static fromEnvironment() {
    return new Ory(envOrFail("ORY_API_KEY"));
  }

  constructor(apiKey: string) {
    this.config = new Configuration({ apiKey });
    this.identity = new IdentityApi(this.config);
  }

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

  private async findIdentity(email: string): Promise<Identity | null> {
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

  private async terminateAllSessions(identityId: string) {
    return this.identity.deleteIdentitySessions({ id: identityId });
  }

  private async updateIdentityState(
    identityId: string,
    state: "active" | "inactive",
  ) {
    return this.identity.patchIdentity({
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
