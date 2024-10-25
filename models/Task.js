const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  dueDate: Date,
  status: { type: String, enum: ['complete', 'incomplete'], default: 'incomplete' },
  dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  assignedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  isRecurring: { type: Boolean, default: false },
  recurrenceType: { type: String, enum: ['daily', 'weekly', 'monthly'] },
  history: [
    {
      update: String,
      updatedAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Task', taskSchema);
