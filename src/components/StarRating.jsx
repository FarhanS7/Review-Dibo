import { Star } from "lucide-react";

const StarRating = ({
  rating,
  size = "medium",
  interactive = false,
  onRatingChange,
}) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-6 w-6",
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
          onClick={() => interactive && onRatingChange && onRatingChange(star)}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
    </div>
  );
};

export default StarRating;
