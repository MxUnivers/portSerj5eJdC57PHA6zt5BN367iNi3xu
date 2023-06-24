
const Comment = require("../models/CommentModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        await res.status(200).json({
            data: comment,
            comment: "Comment créer avec succès"
        })
    } catch (error) {
        res.status(500).json({ error: error.comment });
    }
})

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const comment = await Comment.findOneAndUpdate({ _id: req.params.id },req.body);
        await comment.save();
        await res.status(200).json({data:comment , comment:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ comment: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id });
        await res.status(200).json({ data: comment, comment: "recupérer !" });
    } catch (error) {
        res.status(405).json({ comment: "Erreur lors de Modification" });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const comment = await Comment.find({});
        await res.status(200).json({ data: comment.reverse() });
    } catch (error) {
        res.status(405).json({ comment: "Erreur lors de récuperation" });
    }
});

router.get("/get/all/archives", async (req, res) => {
    try {
        const comment = await Comment.find({visible:false});
        await res.status(200).json({ data: comment.reverse() });
    } catch (error) {
        res.status(405).json({ comment: "Erreur lors de récuperation" });
    }
});
// VALID
router.delete("/delete/:id", async (req, res) => {
    try {
        const comment = await Comment.findOneAndUpdate({_id:req.params.id });
        comment.access = false;
        await comment.save();
        await res.status(200).json({ data: comment, comment: "Comment archivé" });
    } catch (error) {
        res.status(405).json({ comment: "Error  " });
    }
})
// DELETE 
router.delete("/show/:id", async (req, res) => {
    try {
        const comment = await Comment.findOneAndUpdate({ _id: req.params.id },req.body);
        comment.access = true;
        await comment.save();
        res.status(200).json({ data: comment, comment: "Comment non archivé" });
    } catch (error) {
        res.status(405).json({ comment: "Error  " })
    }
})


module.exports = router;