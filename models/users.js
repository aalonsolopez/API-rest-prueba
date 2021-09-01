const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Title required'],
  },
  password: {
    type: String,
    unique: true,
    required: [true, 'Password required']
  },
  vgames: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'vgames',
    default: [],
  },
});

module.exports = mongoose.model('user', userSchema);
