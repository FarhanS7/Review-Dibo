import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews, onDelete }) {
  if (!reviews.length) return <p className="text-gray-500">No reviews yet.</p>;

  return (
    <div className="grid gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onDelete={onDelete} />
      ))}
    </div>
  );
}
