# Datahub - FE

## Description
Client application provides a workspace for defining parameters and rules for tabular data parsing operations

[@angular/router](https://github.com/angular/angular) to manage navigation between routes;
[@ngrx/effects](https://github.com/ngrx/effects) to isolate side effects.

Built with [@angular/cli](https://github.com/angular/angular-cli)
Inspired by (https://github.com/ngrx/example-app.git)

### Included
 - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular apps, inspired by Redux
 - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
 - [angular/router](https://github.com/angular/angular) - Angular Router
 - [ngrx/db](https://github.com/ngrx/db) - RxJS powered IndexedDB for Angular apps
 - [ngrx/store-devtools](https://github.com/ngrx/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
 - [codewareio/ngrx-store-freeze](https://github.com/codewareio/ngrx-store-freeze) - A @ngrx/store meta reducer that prevents state from being mutated
 - [reselect](https://github.com/reactjs/reselect) - Selector library for Redux
 - [angular-material](https://github.com/angular/material2) - Modern styles for Angular 4
 - [browsersync](https://github.com/Browsersync/browser-sync) - For live reloading

### Quick start

```bash
# Use npm or yarn to install the dependencies:
npm install

# OR
yarn

# start the server
npm start
```

### Docker
Docker requires that the image exist within your local machine so it can be used to create a container. 

```bash
npm run docker:build
```

Once you complete the initial setup start the instance:

```bash
npm run docker:start
```

To update a Docker container with your local repo:

```bash
npm run docker:update
```

If the container gets stuck in a running state:

 ```
 npm run docker:destroy
 ```





