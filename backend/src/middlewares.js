const Admin = require('./models/Admin');

module.exports = { 

    async requestTime(req, res, next) { 
        console.time("Time");
        console.log(`[ ${req.method} ] ${req.url} - Status code: ${res.statusCode}`);
        next();
        console.timeEnd("Time");
    },
    
    async verifyToken(req, res, next) { 
        const { email, token } = req.headers;
        const adminExists = await Admin.findOne({ email });
        if (adminExists && adminExists.token === token) { 
            next();
        } else { 
            return res.status(401).json({ status: 401, message: "Invalid credentials."});
        }
    }
    
}