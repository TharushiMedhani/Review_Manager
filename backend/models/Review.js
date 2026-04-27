const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  ratings:{
    type:Number,
    required:true
  }

  // TODO (Student): Add the missing field based on instructions.md
  // rating
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
