const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  source: { type: String, enum: ['Website', 'Referral', 'Social Media', 'Email', 'Other'], default: 'Website' },
  status: { type: String, enum: ['New', 'Contacted', 'Qualified', 'Proposal', 'Negotiation', 'Converted'], default: 'New' },
  notes: { type: String, default: '' },
  value: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);