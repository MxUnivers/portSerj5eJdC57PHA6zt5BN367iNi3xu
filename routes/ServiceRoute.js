const Service = require('../models/ServiceModel');
const router = require('express').Router();

// Create
router.post('/', async (req, res) => {
    try {
        const service = new Service(req.body)
        await service.save()
        await res.status(200).json({ data: service, message: 'Serviceme Créer' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Edit
router.put('/:id', async (req, res) => {
    try {
        const service = await Service(req.body)
        await service.save()
        await res.status(200).json({ data: service, message: 'Serviceme Update' })
        console.log(service)
    } catch (error) {
        res.status(405).json({ message: error })
    }
});

// GET SCHOOL ID
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findOne({ _id: req.params.id })
        await res
            .status(200)
            .json({ data: service, message: 'Serviceme recupérer !' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
});

// GET ALL  TEST
router.get('/get/all', async (req, res) => {
    try {
        const service = await Service.find({})
        await res.status(200).json({ data: service.reverse() })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de récuperation' })
    }
});

//GET ALL VISIBLE
router.get('/get/all/archives', async (req, res) => {
    try {
        const service = await Service.find({ visible: false })
        await res
            .status(200)
            .json({ data: service.reverse(), message: 'get all visible' });
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de récuperation' })
    }
});
//ARICHIVE 



// availlaide
router.delete('/hide/:id', async (req, res) => {
    try {
        const service = await Service.findById({
            _id: req.params.id,
        })
        res.status(200).json({ data: service, message: 'Bloqué' })
        service.visible = false;
        await service.save()
    } catch (error) {
        res.status(405).json({ message: 'Access Bloqué' })
    }
});
// valide
router.delete('/show/:id', async (req, res) => {
    try {
        const service = await Service.findById({
            _id: req.params.id
        })
        service.visible = true;
        await service.save()
        res.status(200).json({ message: 'Deboqué' });
    } catch (error) {
        res.status(405).json({ message: 'Error  ' })
    }
});

module.exports = router;
