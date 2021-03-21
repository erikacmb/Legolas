const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({ 
  name: { 
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  password: { 
    type: String,
    required: true
  },
  token: { 
    type: String,
    required: false
  }
}, { 
  timestamps: true
});

module.exports = model('Admin', AdminSchema);