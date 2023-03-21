
const ManagerPage = require("../models/ManagerPageModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const manager = new ManagerPage(req.body);
        await manager.save();
        await res.status(200).json({
            data: manager,
            message: "Membre créer"
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const manager = await ManagerPage.findOneAndUpdate({ _id: req.params.id },req.body);
        await manager.save();
        await res.status(200).json({data:manager , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});



// GET ALL TEST
router.get("/get/all", async ( req , res) => {
    try {
        const manager = await ManagerPage.find({});
        await res.status(200).json({ data: manager.reverse() }) ;
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});


// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const user = await user.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: user, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
});


module.exports = router;
