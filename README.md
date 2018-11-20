# React Native Template
A simple basic template to start a new project with React Native.

## Getting Started
The following describes the information you need to run the project.

### Prerequisites
- react-native-cli
- Yarn or Npm
- React Native => v0.56.x

### Usage
 Create a new project passing a template:
 ```
 react-native init [ProjectName] --template https://github.com/brunoferreiras/react-native-template-brunoferreiras
 ```
 Wait for download dependencies.

### Add Scripts in your package.json
```JSON
  {
    ...,
    "scripts": {
      "release": "node node_modules/react-native/local-cli/cli.js run-android --variant=release",
      "debug": "node node_modules/react-native/local-cli/cli.js run-android",
      "build-dev": "cd android && ./gradlew clean && cd .. && npm run debug",
      "build-release": "cd android && ./gradlew clean && cd .. && npm run release",
      "start": "node node_modules/react-native/local-cli/cli.js start",
      "test": "jest",
      "test:watch": "npm test -- --watch",
      "test:coverage": "npm test -- --coverage",
      "lint": "eslint *.js **/*.js",
      "lint:tests": "eslint __tests__/**/*.js"
    },
    ...
  }
```
# Third party bugs

When a new project is started based on our template we've some bugs on XCode environment. To fix this you'll have to install third party modules and then configure glog lib, so follow this steps:
```bash
$ cd node_modules/react-native
$ scripts/ios-install-third-party.sh
$ cd third-party/glog-0.3.5/
$ ../../scripts/ios-configure-glog.sh
```

# Firebase bugs (react-native-fcm)

We also have to manually install firebase modules with cocoapods.

```
cd ios && pod init
```
Add these lines to your newly created Podfile

```
  # Pods for APP
  pod 'Firebase'
  pod 'Firebase/Messaging'
```

And then run `pod install`. Now you ready to go!

 ## Contributing
 Please read [CONTRIBUTING.md](https://github.com/brunoferreiras/react-native-template-brunoferreiras/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
 ## Versioning
 We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/brunoferreiras/react-native-template-brunoferreiras/tags).
 ## Authors
 * **Bruno Ferreira** - [Github](https://github.com/brunoferreiras)
 * **Vitor Veras** - [Github](https://github.com/vitor-veras)

 See also the list of [contributors](https://github.com/brunoferreiras/react-native-template-brunoferreiras/contributors) who participated in this project.
 ## License
 This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/brunoferreiras/react-native-template-brunoferreiras/blob/master/LICENSE.md) file for details
