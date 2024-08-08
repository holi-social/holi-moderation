
## Deployment

This is deployed as a GCP Cloud Function. 
As GCP requires their Cloud Functions to have its own build step in Cloud Build, but we want to have the Gitlab pipeline own the builds and the outputs:
We skip Cloud Build by slipping it a prepared minimal pre-dist/package.json with an empty "gcp-build" script.

The gitlab pipeline bundles all the code and its dependencies into dist/index.js, which next to the prepared package.json file is then zipped and deployed via terraform.