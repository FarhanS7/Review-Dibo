import { Edit, Trash2 } from "lucide-react";
import StarRating from "./StarRating";

const ReviewCard = ({ review, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {review.shopName}
          </h3>
          <StarRating rating={review.rating} />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(review)}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(review.id)}
            className="p-2 text-gray-500 hover:text-red-600 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-3">{review.reviewText}</p>

      <div className="text-sm text-gray-500">{review.date}</div>
    </div>
  );
};

export default ReviewCard;
