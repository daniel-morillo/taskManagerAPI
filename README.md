API for a Task Manager App project. Built using Node.js

models folder contains all of the entities' schemas

Each entity has its own folder with 4 files:
service.js: contains GET, PUT, POST and DELETE Operations
controller.js: is used to handle responses 
router.js: contains the routes for each operation defined in service and hanlded in controller
index.js: the final export for each entuty folder (exports a router)
