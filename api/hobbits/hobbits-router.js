const express = require('express');
const router = express.Router();
const Hobbit = require('./hobbits-model');


router.get('/', (req,res)=>{
    const hobbits = Hobbit.getAll();
    res.status(200).json(hobbits);
})

router.post('/', (req,res)=>{
    const payload = req.body;
    if(payload.name && payload.name.trim() && payload.name.trim().length > 3) {
        const newHobbit = Hobbit.create(req.body);
        res.status(201).json(newHobbit);
    } else {
        res.status(400).json({message: 'name bilgisi eksik veya 3 karakterden az!...'});
    } 
})

router.put('/:id', (req,res)=>{
    const updatedHobbit = Hobbit.update(req.body, req.params.id);
    res.status(201).json(updatedHobbit);
})

router.delete('/:id', (req,res)=>{
    //Delete function

    res.status(200).json({message: `deleted`});
})


module.exports = router;
