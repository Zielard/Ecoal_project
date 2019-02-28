const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizz = db.quizzes;

const protect = (req, res, f) => {
    if (!req.headers || !req.headers.username || !req.headers.password) {
        res.json({isConnected: false});
        return;
    }
    Users.findOne({username: req.headers.username, password: req.headers.password})
        .exec((err, data) => {
            if (err) console.log("error", err);
            else {
                if (data) f(req, res);
                else res.json({isConnected: false})
            }
        })
};

router
  .use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded

  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })

    .get("/getquizzes", (req, res) => {
        Quizz.find({})
          .exec((err, data) => {
            if (err) return res.status(500).send(err);
            else res.json(data);
          });
    })

    .get("/getquizz/:id", (req, res) => {
        Quizz.findOne({
            _id: req.params.id
        })
            .exec((err, data) => {
                if (err) return res.status(500).send(err);
                else res.json(data);
            });
    })
    .post("/addnewquizz", (req, res) => {
          const q = new Quizz(req.body);    // The json object is the body of the request
          q.save()                          // Save the object.
           .then(item => res.json(item))     // send the object in response
           .catch(err => res.status(400).send("unable to save to database"));
    })
    .post("/login", (req, res) => {
    console.log(req.body.username,req.body.password)
        if (!req.body.username || !req.body.password) {
            res.json({isConnected: false})
        } else {
            Users.findOne({username: req.body.username, password: req.body.password})
                .exec((err, data) => {
                    if (err) console.log("error", err);
                    else {
                        console.log("data", data)
                        if (data) res.json({isConnected: true});
                        else res.json({isConnected: false})
                    }
                })
        }
    })
    .post("/signUp", (req, res) => {
        if (!req.body.username || !req.body.password) {
            res.json({isConnected: false})
        } else {
            Users.findOne({username: req.body.username})
                .exec((err, data) => {
                    if (err) console.log("error", err);
                    else {
                        if (data) res.json({isConnected: false});
                        else {
                            const q = new Users({username:req.body.username,password:req.body.password});
                            q.save()
                                .then(() => res.json({isConnected: true}))
                                .catch(err => res.status(400).send("unable to save to database:", err))
                        }
                    }
                })
        }
    })
          

  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
