
const Visitor = require("../models/VisitorModel");
const router = require("express").Router();

let nbVisits = 0;
// CREATE
router.post("/visit", async (req, res) => {
    try {
        const visitor = new Visitor({count:nbVisits++});
        await visitor.save();
        nbVisits++;
        await res.status(200).json({
            data: visitor,
            visitor: "Visitor Ajouté"
        });
    } catch (error) {
        res.status(500).json({ error: error.Visitor });
    }
})



// GET ALL TEST
router.get("/nbVisits", async (req, res) => {
    try {
        const visitor = await Visitor.find({});
        await res.status(200).json({ data: visitor.reverse() });
    } catch (error) {
        res.status(405).json({ Visitor: "Erreur lors de récuperation" });
    }
});


module.exports = router;