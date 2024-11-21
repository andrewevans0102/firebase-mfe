# Firebase MFE

This is a sample project that demonstrates how to build a Microfrontend with Firebase. This is the companion project to my post [Building Microfrontends with Firebase](https://andrewevans.dev/blog/2024-11-19-building-microfrontends-with-firebase/).

The project consists of three smaller projects that are parts of an Microfrontend (MFE). These projects all have their own folders:

-   host (the MFE host)
-   remote1 (one remote that is exposed and consumed by the host)
-   remote2 (a second remote that is exposed and consumed by the host)

## Running Locally

If you want to run the project locally, you'll need to go over to the [Firebase console](https://console.firebase.google.com/) and create a project. If you are new to Firebase I recommend checking out [their fundamentals page](https://firebase.google.com/docs/guides). Once you have your project created, you'll also need to [register your app](https://firebase.google.com/docs/web/setup#register-app). Once you're registered you should get values like the following:

```js
const firebaseConfig = {
    // Add your Firebase config here
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    projectId: '<PROJECT_ID>',
    storageBucket: '<STORAGE_BUCKET>',
    messagingSenderId: '<MESSAGING_SENDER_ID>',
    appId: '<APP_ID>',
}
```

You'll need to replace the values in `host/src/firebase.ts` with these values created.

The sample project also makes use of Auth just to demonstrate how props can be passed into remotes from the `host` project. Go over to the Auth service in your firebase project and create a user that you can use for testing.

Each of the three folders already has a `firebase.json` and `.firebaserc` file that are there for reference. Those will need to be recreated with the Firebase CLI. You'll need to run commands to initialize and create "sites" in their hosting service for each of the three projects. You'll need to go into each folder and do:

```bash
firebase init

firebase hosting:sites:create <FOLDER_NAME>
firebase target:apply hosting <FOLDER_NAME> <PROJECT_ID>-<FOLDER_NAME>
```

If you're having an issue with getting the host correct with the Firebase CLI, check out their [CLI documentation](https://firebase.google.com/docs/cli#hosting-commands).

Once you have that all setup, you can modify the npm scripts in the individual projects to accommodate what you've setup. The npm scripts that are in the project root will go into the individual folders and run `deploy` or `start` commands

```json
{
    "scripts": {
        "deploy:host": "cd host && npm run build && npm run deploy",
        "deploy:remote1": "cd remote1 && npm run build && npm run deploy",
        "deploy:remote2": "cd remote2 && npm run build && npm run deploy",
        "start:host": "cd host && npm run start",
        "start:remote1": "cd remote1 && npm run start",
        "start:remote2": "cd remote2 && npm run start"
    }
}
```
