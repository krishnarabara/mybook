const express = require('express');
const router = express.Router();
const { Router } = require('express');



router.post('/login');
router.post('/register');
console.log("hello!!");
router.get('/test', (req, res) => {
    console.log("hello backend!1");
    return res.send('GET request received');
    
    

});


module.exports = router;

             
