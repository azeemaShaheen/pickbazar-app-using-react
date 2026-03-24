import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { ShoppingBag, User, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartUniqueCount } from "../../store/slices/productSlice";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const totalItems = useSelector(selectCartUniqueCount);

  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      setShowDropdown(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-6">
        
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="PickBazar" className="h-7 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <button
              className="hover:text-[#0B9376]"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="hover:text-[#0B9376]"
              onClick={() => navigate("/")}
            >
              Shop
            </button>
            <button className="hover:text-[#0B9376]">About</button>
            <button className="hover:text-[#0B9376]">Contact</button>
          </nav>

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

          {!user ? (
            <button
              className="rounded-md bg-[#0B9376] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) : (
            <div className="relative">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <User size={20} className="text-gray-700" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg z-50">
                  <div className="border-b px-4 py-3 text-sm text-gray-700">
                    <p className="font-semibold">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 break-all">
                      {user?.email}
                    </p>
                  </div>

                  <button
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/profile");
                    }}
                  >
                    <User size={16} />
                    Profile
                  </button>

                  <button
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;