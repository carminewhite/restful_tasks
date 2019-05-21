//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./../controllers/controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/', controller.index)
    app.get('/:id', controller.pull_by_id)
    app.put('/:id', controller.update_by_id)
    app.post('/new/:title/:desc', controller.add_new)
    app.delete('/:id', controller.delete_by_id)
}

