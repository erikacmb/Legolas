const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({ 
  name: { 
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: false
  },
  mobile: { 
    type: String,
    required: true
  },
  reference: { 
    type: String,
    required: false
  },
  orders: { 
    type: [String],
    required: false
  },
  birthday: { 
    type: String,
    required: false
  },
  delivery: { 
    type: String,
    required: false
  },
  publicPlace: { 
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  },
  district: {
    type: String,
    required: false
  },
  city: { 
    type: String,
    required: false
  },
  state: { 
    type: String,
    required: false
  },
  country: { 
    type: String,
    required: false
  }
}, { 
  timestamps: true
});

module.exports = model('Client', ClientSchema);