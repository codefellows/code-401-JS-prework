# LAB - 00

## Deployment Tutorial

### Author: John Cokos

### Links and Resources
* [submission PR](https://github.com/tutuorial-401js/class-00)
* [travis](https://travis-ci.com/tutuorial-401js/class-00)
* [front-end](https://tutorial-401js.herokuapp.com/)

#### Documentation
* [jsdoc](https://tutorial-401js.herokuapp.com/docs)

### Modules
#### `pol.js`
##### Exported Values and Methods

###### `isAlive(dead) -> boolean`
The isAlive() method returns a boolean based on the arg sent in.

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns true or false
* Endpoint: `/docs`
  * Renders Developer Documentation
  
#### Tests
* Unit Tests: `npm run test`
* Lint Tests: `npm run lint`
* Assertions Made
  * Assert that isAlive() properly returns a boolean
* Assertions Remaining
  * ... Things I want to tests, but didn't yet.

#### UML

![UML Diagram](whiteboard.jpg)
