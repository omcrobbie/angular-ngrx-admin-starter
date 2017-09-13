## Description
A basic starting point for front-end web apps with most of the annoying/tedious stuff already in place

Built with [@angular/cli](https://github.com/angular/angular-cli)
Inspired by (https://github.com/ngrx/example-app.git)

### Features
 - Login / Logout
 - Token-based authentication and http token injection (token is injected into headers)
 - Notifications w/ angular-material 'snackbar'
 - Custom angular-material theming
 - Configurable confirmation dialog
 - Designed for use with [foundation-node-postgres](https://github.com/AD60/foundation-node-postgres)
 - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular apps, inspired by Redux
 - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
 - [angular/router](https://github.com/angular/angular) - Angular Router
 - [ngrx/store-devtools](https://github.com/ngrx/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
 - [ngrx/router-store](https://github.com/ngrx/router-store) - Bindings to connect Angular router to ngrx/store
 - [codewareio/ngrx-store-freeze](https://github.com/codewareio/ngrx-store-freeze) - A @ngrx/store meta reducer that prevents state from being mutated
 - [reselect](https://github.com/reactjs/reselect) - Selector library for Redux
 - [angular-material](https://github.com/angular/material2) - Modern styles for Angular 4
 - [browsersync](https://github.com/Browsersync/browser-sync) - For live reloading
 - [ngx-auto-unsubscribe](https://github.com/NetanelBasal/ngx-auto-unsubscribe) - for cleanly handling observables
 - [basscss](https://github.com/basscss/basscss) - low-level css toolkit

### Quick start

```bash
# Use npm or yarn to install the dependencies:
npm install

# OR
yarn

# start the server
npm run start:dev
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





