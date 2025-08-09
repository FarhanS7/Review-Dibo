import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const ReviewForm = ({ onSubmit, editReview, onCancel }) => {
  const [formData, setFormData] = useState({
    shopName: "",
    reviewText: "",
    rating: 5,
  });

  useEffect(() => {
    if (editReview) {
      setFormData({
        shopName: editReview.shopName,
        reviewText: editReview.reviewText,
        rating: editReview.rating,
      });
    }
  }, [editReview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.shopName.trim() && formData.reviewText.trim()) {
      onSubmit(formData);
      if (!editReview) {
        setFormData({ shopName: "", reviewText: "", rating: 5 });
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {editReview ? "Edit Review" : "Write a Review"}
      </h2>

      <div onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Shop Name *
          </label>
          <input
            type="text"
            value={formData.shopName}
            onChange={(e) => handleInputChange("shopName", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Enter shop name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating *
          </label>
          <StarRating
            rating={formData.rating}
            interactive={true}
            onRatingChange={(rating) => handleInputChange("rating", rating)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Review Text *
          </label>
          <textarea
            value={formData.reviewText}
            onChange={(e) => handleInputChange("reviewText", e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Share your shopping experience..."
            required
          />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            {editReview ? "Update Review" : "Submit Review"}
          </button>
          {editReview && (
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
