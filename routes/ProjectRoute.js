
const Project = require("../models/ProjectModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        await res.status(200).json({
            data: project,
            message: "Créer avec Succès"
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const project = await Project.findOneAndUpdate({ _id: req.params.id },req.body);
        await project.save();
        await res.status(200).json({data:project});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id });
        await res.status(200).json({ data: project, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const project = await Project.find({visible:true});
        await res.status(200).json({ data: project.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});

//GET ALL VISIBLE
router.get("/get/all/archives", async (req, res) => {
    try {
        const project = await Project.find({ visible: false });
        await res.status(200).json({ data: project.reverse(), message: "get all visible" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});


// AVAILAID
router.delete("/hide/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate({ _id: req.params.id});
        project.visible=false;
        await project.save();
        res.status(200).json({ message: "Bloqué" });
    } catch (error) {
        res.status(405).json({ message: "Access" })
    }
});

// VALID
router.delete("/show/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate({ _id: req.params.id  });
        project.visible=true;
        await project.save()
        res.status(200).json({ message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
});
// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: project, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
});


module.exports = router;
