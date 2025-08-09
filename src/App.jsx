import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ReviewCard from "./components/ReviewCard";
import ReviewForm from "./components/ReviewForm";
import SearchFilter from "./components/Search";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [editReview, setEditReview] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = JSON.parse(
      window.localStorage.getItem("reviews") || "[]"
    );
    setReviews(savedReviews);
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Add or update review
  const handleSubmitReview = (formData) => {
    if (editReview) {
      // Update existing review
      setReviews((prev) =>
        prev.map((review) =>
          review.id === editReview.id ? { ...review, ...formData } : review
        )
      );
      setEditReview(null);
    } else {
      // Add new review
      const newReview = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setReviews((prev) => [newReview, ...prev]);
    }
  };

  // Edit review
  const handleEditReview = (review) => {
    setEditReview(review);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete review
  const handleDeleteReview = (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews((prev) => prev.filter((review) => review.id !== reviewId));
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditReview(null);
  };

  // Filter reviews based on search term
  const filteredReviews = reviews.filter((review) =>
    review.shopName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Reviews
          </h1>
          <p className="text-gray-600">
            Share your online shopping experiences
          </p>
        </div>

        {/* Review Form */}
        <ReviewForm
          onSubmit={handleSubmitReview}
          editReview={editReview}
          onCancel={handleCancelEdit}
        />

        {/* Search Filter */}
        {reviews.length > 0 && (
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        )}

        {/* Reviews Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Reviews ({filteredReviews.length})
          </h2>

          {filteredReviews.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                {searchTerm
                  ? "No reviews found for your search."
                  : "No reviews yet. Be the first to share your experience!"}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onEdit={handleEditReview}
                  onDelete={handleDeleteReview}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
