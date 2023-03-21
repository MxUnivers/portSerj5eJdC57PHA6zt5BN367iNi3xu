
const Message = require("../models/MessageModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const message = new Message(req.body);
        await message.save();
        await res.status(200).json({
            data: message,
            message: "Message créer avec succès"
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const message = await Message.findOneAndUpdate({ _id: req.params.id },req.body);
        await message.save();
        await res.status(200).json({data:message , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const message = await Message.findOne({ _id: req.params.id });
        await res.status(200).json({ data: message, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const message = await Message.find({visible:true});
        await res.status(200).json({ data: message.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});

router.get("/get/all/archives", async (req, res) => {
    try {
        const message = await Message.find({visible:false});
        await res.status(200).json({ data: message.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});
// VALID
router.delete("/delete/:id", async (req, res) => {
    try {
        const message = await Message.findOneAndUpdate({_id:req.params.id });
        message.visible = false;
        await message.save();
        await res.status(200).json({ data: message, message: "Message archivé" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
})
// DELETE 
router.delete("/show/:id", async (req, res) => {
    try {
        const message = await Message.findOneAndUpdate({ _id: req.params.id });
        message.visible = true;
        await message.save();
        res.status(200).json({ data: message, message: "Message non archivé" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
})


module.exports = router;
