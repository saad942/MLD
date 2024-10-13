const express = require('express');
const router = express.Router();
const { Login, CreateUser ,getUserById ,deleteUser} = require("../controllers/Controllers-Usr");

router.post("/register", CreateUser);
router.post("/login", Login);
router.get('/user/:userId' ,getUserById);
router.delete('/user/:Id', deleteUser);

module.exports=router;