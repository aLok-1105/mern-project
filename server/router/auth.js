/** @format */

const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
	res.send('Hello World from auth');
});

//async await
router.post('/register', async (req, res) => {
	const { name, email, work, phone, password, cpassword } = req.body;

	if (!name || !email || !work || !phone || !password || !cpassword) {
		return res.status(422).json({ error: 'Invalid' });
	}

	try {
		const userExists = await User.findOne({ email: email });
		if (userExists) {
			return res.status(422).json({ error: 'Email exists!!' });
		} else if (password != cpassword) {
			return res.status(422).json({ error: 'Passwords do not match' });
		} else {
			const user = new User({
				name,
				email,
				work,
				phone,
				password,
				cpassword,
			});

			//hashing in userSchema
			await user.save();

			res.status(201).json({
				message: 'User Successfully Registered',
			});
		}
	} catch (error) {
		console.log(error);
	}
});

//login route

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ error: 'Please fill the data' });
		}

		const userLogin = await User.findOne({ email});

        const isMatch = await bcrypt.compare(password, userLogin.password);

		if (isMatch && userLogin) {
			return res.status(200).json({ message: 'Logged In!!!' });
		}

		return res.status(422).json({ error: 'Invalid Credentials' });
	} catch (error) {
		console.log(error);
	}
});

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
