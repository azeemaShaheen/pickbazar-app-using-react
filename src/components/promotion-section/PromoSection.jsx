import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import CashOnDelivery from "../../assets/cash-on-delivery.webp"
import CouponSavings from "../../assets/coupon-savings.webp"
import ExpressDelivery from "../../assets/Express-delivery.webp"
import FreeDelivery from "../../assets/free-delivery.webp"
import GiftVoucher from "../../assets/gift-vouncher.webp"

const PromoSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden">
              <img src={ExpressDelivery} alt="Express Delivery" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden">
              <img src={CashOnDelivery} alt="Cash On Delivery" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden">
              <img src={GiftVoucher} alt="Gift Voucher" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden">
              <img src={FreeDelivery} alt="Free Delivery" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden">
              <img src={CouponSavings} alt="Coupon Savings" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  )
}

export default PromoSection