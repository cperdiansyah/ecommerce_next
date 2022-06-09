import bcrypt from 'bcryptjs';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users | mongoose.model('Users', userSchema);

export default Users;
