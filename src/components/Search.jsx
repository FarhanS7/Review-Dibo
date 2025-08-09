import { Search } from "lucide-react";

const SearchFilter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 transform -y-1/2 text-gray-400 h-5 w-5 " />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by shop name..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
