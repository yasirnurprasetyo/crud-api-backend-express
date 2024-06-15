const express = require('express')
const router = express.Router()
const verivyToken = require('../middlewares/auth')
const registerController = require('../controllers/RegisterController')
const loginController = require('../controllers/LoginController')
const userController = require('../controllers/UserController')
const {validateRegister, validateLogin} = require('../utils/validators/auth')
const {validateUser} = require('../utils/validators/user')
const { route } = require('express/lib/application')

router.post('/register', validateRegister, registerController.register)
router.post('/login', validateLogin, loginController.login)

router.get('/admin/users', verivyToken, userController.findUser)
router.post('/admin/users', verivyToken, validateUser, userController.createUser)
router.get('/admin/users/:id', verivyToken, userController.findUserById)
router.put('/admin/users/:id', verivyToken, validateUser, userController.updateUser)
router.delete('/admin/users/:id', verivyToken, userController.deleteUser)

module.exports = router