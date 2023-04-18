const express = require('express');
const router = express.Router();

router.put('/hobbit/test', (req,res)=>{
    res.status(200).json({message: `test`});
})


router.put('/hobbit/:id', (req,res)=>{
    const updatedHobbit = Hobbit.update(req.body, req.params.id);
    res.status(201).json(updatedHobbit);
})

router.delete('/hobbit/:id', (req,res)=>{
    //Delete function

    res.status(200).json({message: `deleted`});
})


//Route'dan parametre almak
router.get('/route/:id/:name/:surname/:resource', (req,res)=>{
    const { id } = req.params;
    console.log(id);
    res.status(200).json(params);
})

//Query string'den parametre almak
router.get('/hobbit', (req,res)=>{
    const sortBy = req.query.sortBy;
    const hobbits = Hobbit.getAll();
    const response = hobbits.sort((a,b)=> a[sortBy] < b[sortBy] ? -1 : 1);
    res.status(200).json(response);
})


router.put('/hobbit/test', (req,res)=>{
    res.status(200).json({message: `test`});
})

//Route'dan parametre almak
router.get('/route/:id/:name/:surname/:resource', (req,res)=>{
    const { id } = req.params;
    console.log(id);
    res.status(200).json(params);
})

//Query string'den parametre almak
router.get('/hobbit', (req,res)=>{
    const sortBy = req.query.sortBy;
    const hobbits = Hobbit.getAll();
    const response = hobbits.sort((a,b)=> a[sortBy] < b[sortBy] ? -1 : 1);
    res.status(200).json(response);
})


module.exports = router;
