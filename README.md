# Shop Application

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.2.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

##Folder Structure
'''
 meanshop 
 ├── client 
 │ ├── app - App specific components 
 │ ├── assets - Custom assets: fonts, images, etc… 
 │ └── components - Non-app specific/reusable components 
 │ 
 ├── e2e - Protractor end to end tests 
 │ 
 └── server 
      ├── api - Apps server API 
      ├── auth - Authentication handlers 
      ├── components - App-wide/reusable components 
      ├── config - App configuration
      │ └── local.env.js - Environment variables 
      │ └── environment - Node environment configuration 
      └── views - Server rendered views
'''      
 1. The client folder contains the AngularJS files and assets
 '''
 meanshop/client/app/main 
 ├── main.js - Routes 
 ├── main.controller.js - Controller 
 ├── main.controller.spec.js - Test 
 ├── main.html - View
 └── main.scss - Styles
'''
 2. The server folder contains the NodeJS files, which handle ExpressJS and MongoDB
 '''
 meanshop/server/api/thing 
 ├── index.js - Routes 
 ├── thing.controller.js - Controller 
 ├── thing.model.js - Database model 
 ├── thing.socket.js - Socket events 
 └── thing.spec.js - Test
'''
 3. The e2e files contain the AngularJS end-to-end tests.
    *Karma: the JS unit test runner
    *Jasmine: The BDD framework for testing JS code, executed with Karma
    *Protractor: end to end testing with AngularJS.
     
 4. The node_modules folder contains the requires modules for this project
 
 
 ##Tools
 1. GruntJS: This tool serves to automate repetitive tasks such as CSS/JS minification, compilation, unit testing, and JS linting.
 2. Yeoman (yo): This is a CLI tool for scaffolding web projects. It automates the creation of directories and files through generators, and also provides command lines for common tasks.
 3. Travis CI: This is a Continuous Integration (CI) tool that runs your tests suite every time you commit to the repository.
 4. EditorConfig: This is an IDE plugin, which loads the configuration from a file, .editorconfig. For example, you can set indent_size = 2, indents with spaces or tabs, and so on. It's a time saver and maintains consistency across multiple IDEs/teams.
 5. SocketIO: This is a library that enables real-time bidirectional communication between the server and the client.
 6. Bootstrap: This is a frontend framework for web development. We are going to use it for building the theme throughout this project.
 7. AngularJS full-stack: This is the generator for Yeoman that will provide useful command lines to quickly generate server/client code and deploy to Heroku or OpenShift.
 8. BabelJS: This is the js-tojs compiler that allows the use of features from the next generation JavaScript (ECMAScript 6) instantly, without waiting for browser support.
 9. Git: This is a distributed code versioning control system.

##Package Managers
 1. NPM: This is the default package manager for NodeJS.
 2. Bower: This is the frontend package manager that can be used to handle versions and dependencies of the libraries and assets used in a web project. The file bower.json contains the packages and versions to install, and the file .bowerrc contains the path for the location where those packages need to be installed. The default directory is ./bower_components.
 
##Bower Packages
 1. angular
 2. angular-cookies
 3. angular-mocks
 4. angular-resource
 5. angular-sanitize
 6. angular-scenario
 7. angular-ui-router
 8. angular-socket-io
 9. angular-bootstrap
 10. bootstrap
 11. es5-shim
 12. font-awesome
 13. json3
 14. jquery
 15. lodash
