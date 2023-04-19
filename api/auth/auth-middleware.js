let passed = false;

function welcome(req,res,next) {
    console.log('knock knock');
    console.log('parolayı söyle')
    next();
}

function passwordCheck(req,res,next) {
    const pass = req.body.password;
    if(passed) {
        next();
    } else {
        if(pass && pass == "fsweb0123") {
            passed = true;
            console.log('Hoşgeldin!...');
            req.passed = passed;
            next();
        } else {
            console.log('Buraya giremezsin!...');
            next({status:401, message: "Buraya giremezsin!..."})
        }
    }
}



module.exports = {
    welcome,
    passwordCheck
}