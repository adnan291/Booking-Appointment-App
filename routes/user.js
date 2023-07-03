const express = require('express');   

const path = require('path');

const contactController = require('../controllers/admin')

const router = express.Router();

router.post('/add-user',contactController.postAddUser)

router.get('/get-user',contactController.getAddUser)

router.delete('/delete-user/:id',contactController.postDeleteUser)

module.exports=router;