const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET /api/reviews - Fetch all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/reviews - Create a new review
router.post('/', async (req, res) => {
  const { productName, reviewerName, comment,ratings } = req.body;
  // TODO (Student): Read rating from req.body

  const review = new Review({
    productName,
    reviewerName,
    comment,
    ratings
    // TODO (Student): Assign rating here
  });

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
