const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
	res.send('Hello World from auth');
});

router.post('/register', async (req, res)=>{

    const {name, email, work, phone, password, cpassword} = req.body;

    if(!name || !email || !work || !phone || !password || !cpassword){
        return res.status(422).json({error:"Invalid"})
    }

    try {
        const userExists = await User.findOne({email:email});
            if(userExists){
                return res.status(422).json({error:"Email exists!!"})
            }    

            const user = new User({name, email, work, phone, password, cpassword});
    
            await user.save();

            res.status(201).json({message: "User Successfully Registered"});

        
    } catch (error) {
        console.log(error);
    }
})



//promises

// router.post('/register', (req, res)=>{

//     const {name, email, work, phone, password, cpassword} = req.body;

//     if(!name || !email || !work || !phone || !password || !cpassword){
//         return res.status(422).json({error:"Invalid"})
//     }

//     User.findOne({email:email}).then((UserExists)=>{
//         if(UserExists){
//             return res.status(422).json({error:"Email exists!!"})
//         }

//         const user = new User({name, email, work, phone, password, cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message: "User Successfully Registered"});
//         }).catch((err)=>res.status(500).json({error: "Failed to register"}));
//     }).catch((err)=>{console.log(err)})


// })

module.exports = router;
