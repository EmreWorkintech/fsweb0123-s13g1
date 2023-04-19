const express = require('express');
const router = express.Router();
const Hobbit = require('./hobbits-model');
const md = require('./hobbits-middleware');


//Router içinde router'ı nested kullanabiliriz.
const pratiklerRouter = require('../pratikler/pratikler');
router.use('/pratikler', pratiklerRouter);


//Hobbit resource'um ile ilgili endpontlerimiz:
router.get('/', (req,res)=>{
    const hobbits = Hobbit.getAll();
    res.status(200).json(hobbits);
})

router.post('/', md.payloadNameCheck, md.payloadSurnameCheck, (req,res,next)=>{
    try {
        //throw new Error('oldu bir hata');  //test için manuel hata fırlattık.
        const newHobbit = Hobbit.create(req.body);
        res.status(201).json(newHobbit);
    } catch(err) {
        next(err)
    }
    
})

router.put('/:id', md.logger, md.logger2, md.payloadNameCheck, md.isIdValid, (req,res, next)=>{
    try {
        console.log(req.hobbit);
        const updatedHobbit = Hobbit.update(req.body, req.params.id);
        res.status(201).json(updatedHobbit);
    } catch(err) {
        next(err)
    }
    
})

router.delete('/:id', (req,res)=>{
    res.status(200).json({message: `deleted`});
})



module.exports = router;
