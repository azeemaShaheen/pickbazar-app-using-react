import React from "react";

import Apples from "../../assets/Apples.webp";
import BabySpinach from "../../assets/BabySpinach.webp";
import Blueberries from "../../assets/blueberries.webp";
import BrusselsSprouts from "../../assets/BrusselsSprouts.webp";
import CelerySticks from "../../assets/CelerySticks.webp";
import Clementines from "../../assets/clementines.webp";
import Corn from "../../assets/Corn.webp";
import Cucumber from "../../assets/Cucumber.webp";

function Products() {
  return (
    <div className="bg-[#f3f4f6]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">

          {/* 1 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
              20%
            </div>

            <div className="flex h-40 items-center justify-center">
              <img src={Apples} alt="Apples" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Apples</h3>
              <p className="mt-1 text-xs text-gray-500">1lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 line-through">$2.00</p>
                  <p className="text-sm font-bold text-emerald-600">$1.60</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="flex h-40 items-center justify-center">
              <img src={BabySpinach} alt="Baby Spinach" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Baby Spinach</h3>
              <p className="mt-1 text-xs text-gray-500">2lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-transparent">.</p>
                  <p className="text-sm font-bold text-emerald-600">$0.60</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="flex h-40 items-center justify-center">
              <img src={Blueberries} alt="Blueberries" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Blueberries</h3>
              <p className="mt-1 text-xs text-gray-500">1lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-transparent">.</p>
                  <p className="text-sm font-bold text-emerald-600">$3.00</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
              40%
            </div>

            <div className="flex h-40 items-center justify-center">
              <img src={BrusselsSprouts} alt="Brussels Sprout" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Brussels Sprout</h3>
              <p className="mt-1 text-xs text-gray-500">1lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 line-through">$5.00</p>
                  <p className="text-sm font-bold text-emerald-600">$3.00</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
              17%
            </div>

            <div className="flex h-40 items-center justify-center">
              <img src={CelerySticks} alt="Celery Stick" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Celery Stick</h3>
              <p className="mt-1 text-xs text-gray-500">1lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 line-through">$6.00</p>
                  <p className="text-sm font-bold text-emerald-600">$5.00</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
              17%
            </div>

            <div className="flex h-40 items-center justify-center">
              <img src={Clementines} alt="Clementines" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Clementines</h3>
              <p className="mt-1 text-xs text-gray-500">1lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 line-through">$3.00</p>
                  <p className="text-sm font-bold text-emerald-600">$2.50</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
              20%
            </div>

            <div className="flex h-40 items-center justify-center">
              <img src={Corn} alt="Sweet Corn" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Sweet Corn</h3>
              <p className="mt-1 text-xs text-gray-500">1lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 line-through">$5.00</p>
                  <p className="text-sm font-bold text-emerald-600">$4.00</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
            <div className="flex h-40 items-center justify-center">
              <img src={Cucumber} alt="Cucumber" className="max-h-36 w-auto object-contain" />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">Cucumber</h3>
              <p className="mt-1 text-xs text-gray-500">2.5lb</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-transparent">.</p>
                  <p className="text-sm font-bold text-emerald-600">$2.50</p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M7 7L6.5 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-md bg-emerald-600 px-10 py-3 font-semibold text-white hover:bg-emerald-700">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;