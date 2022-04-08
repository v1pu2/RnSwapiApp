  
# React Native Project RnSwapiApp

Android Demo               |  iOS Demo
:-------------------------:|:-------------------------:
<img src="/demos/android-demo.gif" width="310" height="650"/> |  <img src="/demos/ios-demo.gif" width="310" height="650"/>

## How To Run


You can start by cloning this repository. 

```
git clone https://github.com/v1pu2/RnSwapiApp.git
```

In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go. After that you should proceed as with any javascript project:

- Go to your project's root folder and run `cd RnSwapiApp && npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install -- repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-native-auth0](https://github.com/auth0/react-native-auth0) for secure authentication.
- [@react-navigation/native](https://github.com/react-navigation/react-navigation) navigation library.
- [@react-navigation/native-stack](https://github.com/react-navigation/react-navigation) navigation library.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) to render content within the safe area boundaries of a device like notches and iOS devices.

## Usage

### Folder structure

Follows a very simple project structure:

  - `src`: This folder is the main container of all the code inside the application.
  - `component`: Folder to store any common component that is used throughout the app.
  - `containers`: Folder to store all the stack screens.
  - `screens`:Folder to store all the screens.
  - `services`: Folder to store all the network logic.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: The main component that starts the whole app.
  - `index.js`: Entry point of the application as per React-Native standards.

### Login Screen

Use the Auth0 credentials for both Android and iOS.

### Styleguide

For coding styling, use `StyleSheet` of React-native.

### Components

Components are the basic blocks of a react native application, but since we aim to minimize development complexity, all the components are at the same nesting level.


### Services folder and API connection handler

To keep the networking layer simple, `Axios` is used.

While communicating with a network, just create a function to manage the operation and group according to the kind of transaction inside a service file.
While the data transfer between the API and the app is working, we have used try and catch for the result of the operation.

## Containers and Screens

- In this folder, applied the main objects for the composition architecture. View of each screen by using component, constants, theme and hooks.
- In the Home screen, call api to get all Movies name and in Detail screen, call api to all characters.  
