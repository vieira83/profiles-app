#TODO

Your task is to write a simple app for previewing user's detail. Given equirements:

- Display users list as a tile list.
- Make it possible to choose a user by clicking on a tile. 
- Display chosen user (all details) in the separate view (`<div ui-view="chosenUser"></div>`).
- Do not add new views (ui-view), but of course you can add components, directives, services etc.
- Introduce clean styling to the application (you can use external libs like bootstrap etc.)
- Keep the app responsive 
- Support Chrome browser (current stable version).
- Cover code with unit tests (please take a look at coverage report - higher is better, aim for 100%).
- Write e2e test for given scenario: "When I click on a user's tile I can see user's details below the listing"
- If something seems to be not clear please choose the best solution  
 
### What should I do when I'm finished?
Please zip up your files and email them back, along with information about which features you have included in your solution.
 
#About the env

Here is a quick introduction how to start the development
 
##Node 

v6.10.3

## Package manager ##
The package manager chosen for SmartStock is [yarn](https://yarnpkg.com/). This is a new node package manager built on top of `npm`,
aiming to fix all the minor issues that developers run into when using `npm`.

To start using yarn you have to install the `yarn` command globally on your system. To do that follow
[the yarn install guide](https://yarnpkg.com/en/docs/install) using the instructions for your environment.

## Installation ##
To all frontend dependencies, first change your working directory to "frontend." Then, run the following command:
```bash
yarn
```

To start the server, file watchers, and build process, run

```bash
yarn server
```

This will start the Webpack server and automatically rebuild and refresh the open frontend page as files are edited.

## Tests ##
We have two different kinds of test architecture prepared: unit tests and e2e tests.
We keep 100% coverage of unit tests.

### Unit tests ###
For unit testing we use karma runner with the jasmine framework. You can find more information for both on their websites:
- https://karma-runner.github.io/1.0/index.html
- http://jasmine.github.io/2.0/introduction.html

If you would like to run all unit tests, run the command 
```bash
yarn test
``` 
in the `frontend` directory. This command will create a
process which will find all files in the `frontend/src` directory with `.test` included in the file name and execute them.
After the testing process ends you will see the console code coverage report. To see a generated report of the code coverage,
open the `frontend/coverage` directory in your web browser and click on "index.html"

### e2e tests ###
For e2e testing we use protractor framework with the jasmine. You can find more information for both on their websites:
- http://www.protractortest.org/#/
- http://jasmine.github.io/2.0/introduction.html

If you would like to run all e2e tests, run the command 
```bash
yarn run test-e2e
``` 
in the `frontend` directory. This command will create a
process which will find all files in the `frontend/tets/e2e` directory with `.spec` included in the file name and execute them.
After the testing process ends you will see the console code coverage report. 

For writing e2e tests we follow Protractor style guide (http://www.protractortest.org/#/style-guide)

If you will see problem with `webdrived-manager update` please use 
```bash
yarn update-webdriver
```
