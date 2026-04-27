import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://reviewmanager-production-f157.up.railway.app/api/reviews"

function App() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    reviewerName: '',
    comment: '',
    ratings:''
    // TODO (Student): Add rating to state
  });

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/reviews`, formData);
      fetchReviews();

      setFormData({
        productName: '',
        reviewerName: '',
        comment: '',
        ratings:''
        // TODO (Student): Clear rating here
      });
    } catch (err) {
      console.error('Error adding review:', err);
    }
  };

  return (
    <div className="container">
      <h1>Product Review Manager</h1>

      <div className="form-section">
        <h2>Add New Review</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reviewer Name:</label>
            <input
              type="text"
              name="reviewerName"
              value={formData.reviewerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Comment:</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Ratings:</label>
            <textarea
              name="ratings"
              value={formData.ratings}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* TODO (Student): Add Rating input field here */}

          <button type="submit" className="btn-primary">Add Review</button>
        </form>
      </div>

      <div className="list-section">
        <h2>Home Page - Review List</h2>

        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          <ul className="review-list">
            {reviews.map((review) => (
              <li className="review-card" key={review._id}>
                <div className="review-details">
                  <h3>{review.productName}</h3>
                  <p><strong>Reviewer:</strong> {review.reviewerName}</p>
                  <p><strong>Comment:</strong> {review.comment}</p>
                  <p><strong>Ratings:</strong> {review.ratings}</p>

                  {/* TODO (Student): Display Rating here */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
