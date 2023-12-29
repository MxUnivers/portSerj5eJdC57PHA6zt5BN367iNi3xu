
const Project = require("../models/ProjectModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        return res.status(200).json({
            data: project,
            message: "Créer avec Succès"
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

// EDIT
router.put("/edit/:id", async(req, res) => {
    try {
        const project = await Project.findOneAndUpdate({ _id: req.params.id },req.body);
        await project.save();
        return res.status(200).json({data:project});
    } catch (error) {
        return res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/project/:id", async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id });
        return res.status(200).json({ data: project, message: "recupérer !" });
    } catch (error) {
        return res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

router.get("/project_title/:id", async (req, res) => {
    try {
        const project = await Project.findOne({ name: String(req.params.id).replaceAll("-"," ") });
        console.log(project);
        return res.status(200).json({ data: project, message: "recupérer !" });
    } catch (error) {
        console.log( "Erreur lors de Modification "+error.message);
        return res.status(405).json({ message: "Erreur lors de Modification"+error.message });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const project = await Project.find({visible:true});
        return res.status(200).json({ data: project.reverse() });
    } catch (error) {
        return res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});

//GET ALL VISIBLE
router.get("/get/all/archives", async (req, res) => {
    try {
        const project = await Project.find({ visible: false });
        return res.status(200).json({ data: project.reverse(), message: "get all visible" });
    } catch (error) {
        return res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});


// AVAILAID
router.delete("/hide/:id", async (req, res) => {
    try {
        const project = await Project.findById({ _id: req.params.id});
        project.visible=false;
        await project.save();
        return res.status(200).json({ message: "Bloqué" });
    } catch (error) {
        console.log(error.message);
        return res.status(405).json({ message: "Access" })
    }
});

// VALID
router.delete("/show/:id", async (req, res) => {
    try {
        const project = await Project.findById({ _id: req.params.id  });
        project.visible=true;
        await project.save()
        return res.status(200).json({ message: "Debloqué" });
    } catch (error) {
        console.log(error.message);
        return res.status(405).json({ message: "Error  " });
    }
});
// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const project = await Project.findById({ _id: req.params.id });
        return res.status(200).json({ data: project, message: "Debloqué" });
    } catch (error) {
        console.log(error.message);
        return res.status(405).json({ message: "Error  " })
    }
});


module.exports = router;
