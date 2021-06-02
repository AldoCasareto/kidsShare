const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: 'true',
    },
    categories: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
);

module.export = mongoose.model('Post', PostSchema);
