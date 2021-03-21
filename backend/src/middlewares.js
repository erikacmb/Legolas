module.exports = { 

    async requestTime(req, res, next) { 
        console.time("Time");
        console.log(`[ ${req.method} ] ${req.url} - Status code: ${res.statusCode}`);
        next();
        console.timeEnd("Time");
    }
    
}