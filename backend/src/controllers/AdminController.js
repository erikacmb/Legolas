const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const { v4: uuidv4 } = require('uuid');

module.exports = { 

    async store(req, res) { 
        const { name, email, password } = req.body;
        const adminExists = await Admin.findOne({ email });
        if (adminExists) { 
          return res.status(409).json({ status: 409, message: "Previously created."});
        } 
        var pwd = bcrypt.hashSync(password, salt);
        const admin = await Admin.create({ 
          name,
          email,
          password: pwd,
        });
        return res.status(201).json({ status: 201, message: "Successfully created."});
    
    },

    async login(req, res) { 
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (admin) { 
        const token = uuidv4();
        const match = await bcrypt.compare(password, admin.password);      
        if (match) { 
          admin.token = token;
          await admin.save();
          return res.status(200).json({ status: 200, message: "Logged.", token}); 
        } else { 
          return res.status(401).json({ status: 401, message: "Invalid credentials."});
        }
      } else { 
        return res.status(404).json({ status: 404, message: "Not found."});
      }

    },

    async logout(req, res) { 
      const { email } = req.body;
      const admin = await Admin.findOne({ email });
      if (admin && admin.token !== '') { 
        admin.token = '';
        await admin.save();
        return res.status(200).json({ status: 200, message: "Logged out."}); 
      } else if (admin && admin.token === '') { 
        return res.status(404).json({ status: 404, message: "Already logged out."});
      } else { 
        return res.status(400).json({ status: 400, message: "Ops! Something bad happened."})
      }

    }

};