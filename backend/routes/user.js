const router = require('express').Router();
let User = require('../models/User')

const bcrypt = require('bcrypt')

router.route('/').get( async(req, res) =>{
  const users = await User.find().sort({"updatedAt": -1})
  res.json(users)
})

router.route('/login').post( async(req, res) => {
    //const tours = await Tour.find().sort({"updatedAt": -1})
    const body =req.body;
    const { email, password } = req.body;
    //check email
    const user =await User.findOne({ email: email });
    if (user) {
      //check password
      const validpassword = await bcrypt.compare(body.password,user.password)
      if (validpassword) {
        res.send({ message: "Login successfully", user: user });
      } else {
        res.send({ message: "Password and confirm password didn't match" });
        console.log(validpassword);
        console.log(user.password);
        console.log(body.password);
        
        
      }
    } else {
      res.send({ message: "Invalid Credentials" });
    }
  
      
})

router.route('/register').post( async(req, res) => {
    const { fname, lname, email, password } = req.body;
    //check email
    User.findOne({ email: email }, async (err, user) => {
      if (user) {
        res.send({ message: "User is already registerd" });
      } else {
        const user = new User({
          fname,
          lname,
          email,
          password,
        });
        const salt = await bcrypt.genSalt(10);
        user.password =  await bcrypt.hash(user.password,salt);
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Account has been created!! Please Login" });
          }
        });
      }
    });
    // res.send("register");
    //   console.log(req.body);
  });

  /* router.route('/:id').put(async (req, res) => {
    try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body})
    updateUser.save()
    res.status(200).json( 'User Updated')
    }
    catch(err){
    res.json(err)
}
}) */








module.exports = router