import type { IGraphQLConfig } from "graphql-config";

const gqlUrl: string = process.env.INTERNAL_GRAPHQL_URL!;
const hasuraAdminSecret: string = process.env.HASURA_GRAPHQL_ADMIN_SECRET!;

const config: IGraphQLConfig = {
  schema: [
    {
      [gqlUrl]: {
        headers: {
          "x-hasura-admin-secret": hasuraAdminSecret,
        },
      },
    },
  ],
  extensions: {
    codegen: {
      // Optional, you can use this to format your generated files.
      hooks: {
        afterOneFileWrite: ["eslint --fix"],
      },
      generates: {
        "src/graphql/generated/schema.types.ts": {
          plugins: ["typescript"],
          config: {
            skipTypename: true,
            enumsAsTypes: true,
            defaultScalarType: "string",
          },
        },
        "src/graphql/generated/types.ts": {
          preset: "import-types",
          documents: ["src/**/*.{ts,tsx}"],
          plugins: ["typescript-operations"],
          config: {
            skipTypename: true,
            enumsAsTypes: true,
            preResolveTypes: false,
            useTypeImports: true,
          },
          presetConfig: {
            typesPath: "./schema.types",
          },
        },
      },
    },
  },
};

export default config;
