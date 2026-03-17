import React, { useEffect, useRef, useState } from "react";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from "../../store/slices/productSlice";
import { fetchUsers } from "../../store/thunk/usersThunk";
import { fetchProducts } from "../../store/thunk/productThunk";

function Products() {
  const [filters, setFilters] = useState([]);
  const drawerRef = useRef(null);

  const dispatch = useDispatch();

  const {
    cart,
    totalAmount,
    products: storeProducts,
    loading,
  } = useSelector((state) => state.products);

  const users = useSelector((state) => state.users);

  console.log(storeProducts, "storeProducts");
  console.log(users, "users");

  const totalItems = cart.length;

  const categoryList = [...new Set(storeProducts.map((product) => product.category))];

  const openDrawer = () => {
    if (drawerRef.current && !drawerRef.current.open) {
      drawerRef.current.showModal();
    }
  };

  const closeDrawer = () => {
    if (drawerRef.current && drawerRef.current.open) {
      drawerRef.current.close();
    }
  };

  const filterHandler = (value) => {
    setFilters((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
  };

  const filteredProducts =
    filters.length === 0
      ? storeProducts
      : storeProducts.filter((product) => filters.includes(product.category));

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-[#f3f4f6] relative">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-200">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Store Products
              </h2>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Categories
                </h3>

                <div className="space-y-3">
                  {categoryList.map((category) => (
                    <div key={category} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-emerald-600"
                        checked={filters.includes(category)}
                        onChange={() => filterHandler(category)}
                      />
                      <label className="text-sm text-gray-700 capitalize">
                        {category.replace(/-/g, " ")}
                      </label>
                    </div>
                  ))}
                </div>

                {filters.length > 0 && (
                  <button
                    onClick={() => setFilters([])}
                    className="mt-5 w-full rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {loading ? (
                <p className="text-gray-500">Loading products...</p>
              ) : filteredProducts.length === 0 ? (
                <p className="text-gray-500">No products found.</p>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md"
                  >
                    {product.discountPercentage ? (
                      <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
                        {Math.round(product.discountPercentage)}%
                      </div>
                    ) : null}

                    <div className="flex h-40 items-center justify-center">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="max-h-36 w-auto object-contain"
                      />
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {product.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500 capitalize">
                        {product.category.replace(/-/g, " ")}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-transparent">.</p>

                          <p className="text-sm font-bold text-emerald-600">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>

                        <button
                          onClick={() => dispatch(addToCart(product))}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
                        >
                          Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="rounded-md bg-emerald-600 px-10 py-3 font-semibold text-white hover:bg-emerald-700">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div
          onClick={openDrawer}
          className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white border border-gray-200 shadow-md"
        >
          <ShoppingBag className="text-emerald-600" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>
      </div>

      <dialog
        ref={drawerRef}
        className="fixed inset-0 w-full h-full bg-transparent backdrop:bg-black/40"
      >
        <div className="absolute inset-0" onClick={closeDrawer}></div>

        <div className="absolute right-0 top-0 h-full w-full max-w-[420px] bg-white overflow-y-auto shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-200 px-8 py-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-7 w-7 text-[#0B9376]" />
              <h2 className="text-[20px] font-semibold text-[#0B9376]">
                {totalItems} Item{totalItems === 1 ? "" : "s"}
              </h2>
            </div>

            <button
              onClick={closeDrawer}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B9376] text-white hover:opacity-90"
            >
              <X size={22} />
            </button>
          </div>

          <div className="pb-36">
            {cart.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b border-gray-200 px-8 py-8"
                >
                  <div className="flex h-[140px] w-[48px] flex-col items-center justify-between rounded-full bg-gray-100 py-4">
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="text-gray-700 hover:text-black"
                    >
                      <Plus size={18} />
                    </button>

                    <span className="text-[18px] font-semibold text-gray-800">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="text-gray-700 hover:text-black"
                    >
                      <Minus size={18} />
                    </button>
                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[18px] font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] font-medium text-[#0B9376]">
                      ${item.price.toFixed(2)}
                    </p>

                    <p className="mt-4 text-[14px] text-gray-400">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <div className="flex h-full flex-col items-end justify-between self-stretch">
                    <p className="text-[18px] font-semibold text-gray-800">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>

                    <button
                      onClick={() => dispatch(removeCartItem(item.id))}
                      className="mt-8 text-gray-400 hover:text-red-500"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="fixed bottom-3 right-3 left-auto w-[calc(100%-24px)] max-w-[394px]">
              <div className="flex items-center justify-between rounded-full bg-[#0B9376] p-2 shadow-xl">
                <button className="px-8 py-4 text-[18px] font-semibold text-white">
                  Checkout
                </button>

                <div className="rounded-full bg-white px-8 py-4 text-[18px] font-semibold text-[#0B9376]">
                  ${totalAmount.toFixed(2)}
                </div>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default Products;