var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')

const User = require('../models/UsersModel')
const router = require('express').Router()

// authentification login
router.post('/auth/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        var validate = await bcrypt.compare(req.body.password, user.password)
        if (validate) {
            console.log(validate)
            const payload = { _id: user._id, username: user.username }
            const secretKey = 'clé_sécrète' // la clé secrète utilisée pour signer le jeton
            const options = { expiresIn: '24h' }
            const token = jwt.sign(payload, secretKey, options)
            user.status = false
            user.save()
            res
                .status(200)
                .json({
                    message: "Bienvenue dans l'application ",
                    key: token,
                    data: user
                })
        } else {
            // Authentification échouée
            res.status(401).json({ message: 'username ou mot de passe incorrecte' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/auth/disconnect/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        user.status = false
        user.save()
        res.status(200).json({ message: "utlisateur déconnecté de l'application" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// set password
router.put('/auth/password/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(req.body.password, salt)
        user.save()
        res.json({ message: 'mot de passe modifier avec succès' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
