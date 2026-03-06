import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartUniqueCount } from "../../store/slices/productSlice";

const Header = () => {
  const navigate = useNavigate();
  const totalItems = useSelector(selectCartUniqueCount);

  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-6">
        {/* LEFT */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="PickBazar" className="h-7 w-auto" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <button className="hover:text-[#0B9376]" onClick={() => navigate("/")}>
              Home
            </button>
            <button className="hover:text-[#0B9376]" onClick={() => navigate("/")}>
              Shop
            </button>
            <button className="hover:text-[#0B9376]">About</button>
            <button className="hover:text-[#0B9376]">Contact</button>
          </nav>

          {/* Cart icon (badge shows unique items) */}
          <button
            className="relative p-2 rounded-md hover:bg-gray-100 text-gray-700"
            onClick={() => navigate("/")}
            title="Cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="rounded-md bg-[#0B9376] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;