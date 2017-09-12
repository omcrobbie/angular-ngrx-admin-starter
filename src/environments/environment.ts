// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

declare var process: {
  env: {
    BACKEND_API: string
  }
};

export const environment = {
  apiUrl: process.env.BACKEND_API,
  production: false,
  userTokenKey: 'ngApp.token'
};
