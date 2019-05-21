//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/tasks', controller.get_all_tasks)
    app.get('/tasks/:id', controller.pull_by_id)
    app.put('/update/:id', controller.update_by_id)
    app.post('/new/:title/:description', controller.add_new)
    app.delete('/:id', controller.delete_by_id)
}

