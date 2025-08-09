import { Menu, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8" />
            <span className="text-xl font-semibold">ReviewCart</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Reviews
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Submit
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 hover:text-gray-300 cursor-pointer transition-colors" />

            <Menu className="md:hidden h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
