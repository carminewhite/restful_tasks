const Task = require("./models")

module.exports = {
    get_all_tasks: function(req, res) {
        Task.find({}, (err, data) => {
            console.log("get all tasks route")
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Success", data: data})
            }
        });
    },

    pull_by_id: function(req, res) {
        let id = req.params.id;
        Task.findOne({"_id": id}, (err, data) => {
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({data: data})
            }
        });
    },

    update_by_id: function(req, res) {
        let id = req.params.id;
        Task.findOneAndUpdate(id, {"title": req.body.title, "description": req.body.description}, (err, data) => {
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({data: data})
            }
        });
    },

    add_new: function(req, res) {
        Task.create({ "title": req.body.title, "description": req.params.description, "completed": false}, (err, data) => {
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({data: data})
            }
        });
    },

    delete_by_id: function(req, res) {
        let id = req.params.id;
        Task.findOneAndDelete({"_id": id}, (err, data) => {
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                console.log("Deleted", data)
                res.redirect('/')
            }
        });
    },
}