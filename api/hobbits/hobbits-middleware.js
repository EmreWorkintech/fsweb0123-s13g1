const Hobbit = require('./hobbits-model');

function logger(req,res,next) {
    console.log('logger is activated');
    next();
}

function logger2(req,res,next) {
    console.log('logger2 is activated');
    next();
}


function payloadNameCheck(req,res,next){
    try {
        const payload = req.body;
        if(!payload.name || !payload.name.trim().length > 3) {
            next({status: 400, message: 'name bilgisi eksik veya 3 karakterden az!...'})
        } else {
            next()
        } 
    } catch(err) {
        next(err);
    }
}

function payloadSurnameCheck(req,res,next){
    try {
        const payload = req.body;
        if(!payload.surname || !payload.surname.trim().length > 3) {
            next({status: 400, message: 'surname bilgisi eksik veya 3 karakterden az!...'})
        } else {
            next()
        } 
    } catch(err) {
        next(err);
    }
}

async function isIdValid(req,res,next){
    try {
        const hobbit = await Hobbit.getById(req.params.id);
        if(!hobbit) {
            next({status: 404, message: `${req.params.id} id'li hobbit bulunamadı!...`})
        } else {
            req.hobbit = hobbit;
            next()
        } 
    } catch(err) {
        next(err);
    }
}



module.exports = {
    logger,
    logger2,
    payloadNameCheck,
    payloadSurnameCheck,
    isIdValid,
}