const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello World from auth');
});

router.post('/register', (req, res)=>{
    console.log(req.body);
    res.send("Register");
})

module.exports = router;
