const User = require('../models/users')  
 
exports.getAddUser =( async (req,res,next)=>{

    try{
        const data = await  User.findAll()
        res.json(data);
    }
    catch(err){
        console.log(err)}
});

exports.postAddUser=( async (req,res,next) => {
    try{
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;

    const data = await User.create({
        name : name,
        email : email,
        phonenumber : phonenumber
    })
     res.json(data);
     }


    catch(err)   {
        console.log(err)
    };

    //res.redirect('/');
})

exports.postDeleteUser=( async (req, res,  next) => {


     try {
           const usrId = req.params.id;
   const data = await User.destroy({ where: {id:usrId}});
      res.sendStatus(200);

     // res.destroy();   is direct user in try carch 
    } 
     catch(err){
        console.log(err);
     }
});