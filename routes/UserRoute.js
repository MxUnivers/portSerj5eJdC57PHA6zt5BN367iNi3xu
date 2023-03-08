
const User = require("../models/UsersModel");
const router = require("express").Router();
const bcrypt = require('bcryptjs');



// CREATE USer
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();
        await res.status(200).json({
            data: user,
            message: 'Nouvelle utilisateur créer'
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id },req.body);
        await user.save();
        await res.status(200).json({data:user , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

router.put('password/:id', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();
        await res.status(200).json({ data: user, message: 'Modifier mot de passe modifier avec succès' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' });
    }
})

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        await res.status(200).json({ data: user, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});



// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const user = await User.find({});
        await res.status(200).json({ data: user.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});



// AVAILAID
router.put("/hide/:id", async (req, res) => {
    try {
        const user = await User.findById({_id:req.params.id},req.body);
        user.visible =  false
        await user.save();
        await res.status(200).json({ data: user, message: "Bloqué" });
    } catch (error) {
        res.status(405).json({ message: "Access" });
    }
})

// VALID
router.put("/show/:id", async (req, res) => {
    try {
        const user = await User.findById({_id:req.params.id },req.body);
        user.visible =  true;
        await user.save();
        await res.status(200).json({ data: user, message: "Débloqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
})
// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: user, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
})


module.exports = router;
