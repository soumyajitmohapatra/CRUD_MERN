import express from "express";
// import { ObjectID } from "mongodb";
// import ObjectId from 'mongodb.ObjectID';
const app = express();
const router = express.Router();

import usersModel from "../models/Users.model.js"

// TO Read the list of users
router.get("/read", async (req, res) => {
  usersModel.find({}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      console.log(
        "Error while retrieving all records : " +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

// To Add new Users
router.post("/add", async (req, res) => {
  let newUser = new usersModel({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });
  await newUser.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while adding new user: " + JSON.stringify(err, undefined, 2)
      );
  });
});

// To Get Employee Details By Employee ID

router.get("/edit/:id", async (req, res) => {
    usersModel.findById(req.params.id, (err, result) => {
      if (!err) {
        res.send(result);
      } else {
        console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
      }
    });
  });

// router.post('/update/:id', (req,res)=> {
//   usersModel.findById(req.params.id, (err, user)=>{
//     if(!user)
//     return next(new Error('Unable to find the user'))
//     else{
//       user.name= req.body.name
//       user.age = req.body.age
//       user.gender = req.body.gender

//       user.save().then(u => {
//         res.json('User Updated Successfully')
//       }).catch(err =>{
//         res.status(400).send("Unable to update user")
//       })
//     }
//   })
// })  

export default router;









// router.put("/:id", (req, res) => {
//     if (!ObjectID.isValid(req.params.id))
//       return res.status(400).send("No record with given id : " + req.params.id);
  
//     let updateUser = {
//       name: req.body.name,
//       age: req.body.age,
//       gender: req.body.gender,
//     };
//     usersModel.findOneAndUpdate(
//       req.params.id,
//       { $set: updateUser },
//       { new: true },
//       (err, docs) => {
//         if (!err) res.send(docs);
//         else
//           console.log(
//             "Error while updating a record : " + JSON.stringify(err, undefined, 2)
//           );
//       }
//     );
//   });