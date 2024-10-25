const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      role: { type: String, enum: ['Owner', 'Admin', 'Member'], default: 'Member' },
    },
  ],
});

module.exports = mongoose.model('Team', teamSchema);
