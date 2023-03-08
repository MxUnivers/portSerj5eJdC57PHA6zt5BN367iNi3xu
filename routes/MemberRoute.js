
const user = require("../models/MemberModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const user = new user(req.body);
        await user.save();
        await res.status(200).json({
            data: user,
            message: "Membre créer"
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const user = await user.findOneAndUpdate({ _id: req.params.id },req.body);
        await user.save();
        await res.status(200).json({data:user , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const user = await user.findOne({ _id: req.params.id });
        await res.status(200).json({ data: user, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const user = await user.find({});
        await res.status(200).json({ data: user.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});



// AVAILAID
router.get("/hide/:id", async (req, res) => {
    try {
        const user = await user.findOne({ access: false });
        res.status(200).json({ data: user, message: "Bloqué" });
    } catch (error) {
        res.status(405).json({ message: "Access" })
    }
})

// VALID
router.get("/show/:id", async (req, res) => {
    try {
        const user = await user.findOne({ access: true }).populate;
        res.status(200).json({ data: user, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
})
// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const user = await user.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: user, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
})


module.exports = router;
