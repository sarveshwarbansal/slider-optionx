"use client"

import Image from "next/image";
import akshit from "../assets/akshit.png";
import pratik from "../assets/pratik.png";
import raghav from "../assets/raghav.png";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const Testimonial = () => {

  const data =[
    {
      image:akshit,
      name:"Akshit Bansal",
      heading :`"Trading Evolution"`,
      para:`“This app redefines trading with a sleek interface and advanced features like Unlimited Order Quantity, Combined Premium spread trading, and Custom Order types. Trading on multiple ladders adds versatility, making it a must-have for traders at every level. Unleash the power of precision trading!”`
    },
    {
      image: pratik,
      name:"Pratik Talreja",
      heading:`"Seamless UX"`,
      para:`“A must-have for efficient trading! The app's easy UI, Automatic Spread Adjustments, and One Click order placement simplify the process. Trading on multiple ladders diversifies strategies, optimizing results. This app not only saves time but also boosts overall trading performance. Highly recommended for serious traders.”`
},
{
      image: raghav,
      name:"Raghav Arora",
      heading:`"Precision Trading"`,
      para:`“This app redefines precision for discretionary traders. Its intuitive rule-setting features empower users, providing unparalleled control. Whether you're a seasoned pro or just starting, this tool ensures confident and precise decision-making. Elevate your trading experience effortlessly.”`
},
{
  image:akshit,
  name:"Akshit Bansal",
  heading :`"Trading Evolution"`,
  para:`“This app redefines trading with a sleek interface and advanced features like Unlimited Order Quantity, Combined Premium spread trading, and Custom Order types. Trading on multiple ladders adds versatility, making it a must-have for traders at every level. Unleash the power of precision trading!”`
},
{
  image: pratik,
  name:"Pratik Talreja",
  heading:`"Seamless UX"`,
  para:`“A must-have for efficient trading! The app's easy UI, Automatic Spread Adjustments, and One Click order placement simplify the process. Trading on multiple ladders diversifies strategies, optimizing results. This app not only saves time but also boosts overall trading performance. Highly recommended for serious traders.”`
},
{
  image: raghav,
  name:"Raghav Arora",
  heading:`"Precision Trading"`,
  para:`“This app redefines precision for discretionary traders. Its intuitive rule-setting features empower users, providing unparalleled control. Whether you're a seasoned pro or just starting, this tool ensures confident and precise decision-making. Elevate your trading experience effortlessly.”`
}
  ]
  return (
    <div className="py-8" id="testimonials"> 
      <h2 className="mb-8 px-4 pb-4 text-white text-center text-[36px] font-bold">
            What our customers say about us
          </h2>
    <Swiper
    loop={true}
    slidesPerView={1}
    spaceBetween={120}
    pagination={{
      clickable: true,
      
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280:{
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    
    <div className='mt-20'>
    
           {data.map((d)=>(
             <SwiperSlide >
             
               
               
                       <div className="mb-6 lg:mb-0 p-6 bg-custom ">
              <div className="relative border-solid border-2 rounded-lg border-[#1C2A56] bg-[#010924] h-[600px] sm:h-[550px]  ">
                <div className="p-6 justify-center items-center text-center">
                  <div className="flex">
                    <div className="flex relative mx-4 justify-center items-center -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <Image
                        src={d.image}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-playfair mb-2 font-bold text-2xl text-[#3D43D8]">
                      {d.name}
                    </h5>
                    <div className="flex justify-center gap-1 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </div>

                    <h6 className="text-white mb-4 font-bold mt-3.5 text-2xl">
                      {d.heading}
                    </h6>
                    <p className="text-[#C7C7C7] font-normal text-base">
                      {d.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
               </SwiperSlide>
           ))}
         
           
                       </div>
    

    
  </Swiper>
  </div>
  )
}

export default Testimonial
