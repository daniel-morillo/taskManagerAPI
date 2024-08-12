const userRouter = require('./users');
const tasksRouter = require('./tasks');
const avatarRouter = require('./avatar');
const customizableRouter = require('./customizables');
const houseRouter = require('./avatarHouses');
const express = require('express')

const router = express.Router()

router.use('/users', userRouter );
router.use('/tasks', tasksRouter );
router.use('/avatar', avatarRouter);
router.use('/customizable', customizableRouter);
router.use('/house', houseRouter);

module.exports = router;