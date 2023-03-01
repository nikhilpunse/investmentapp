import React, { useState } from "react";
import HomeCard from "./HomeCard";

const Subscription = () => {
  return (
    <div>
      <div className="container mx-auto">
      <div className="splide">
        <div className="splide__arrows">
          <button className="bg-gray-900 shadow splide__arrow splide__arrow--prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
          <button className="bg-gray-900 shadow splide__arrow splide__arrow--next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
        <div className="splide__track">
          <div className="splide__list gap-x-4">
            
            <div className="w-[100px] p-4 shadow splide__slide lg:max-w-[300px]">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Tailwind Card Slider 1</h3>
                <p className="text-gray-600">
                  tailwind card slider with splidejs It is a long established
                  fact that a reader will be distracted.
                </p>
              </div>
            </div>

            <div className="w-[100px] p-4 shadow splide__slide lg:max-w-[300px]">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Tailwind Card Slider 2</h3>
                <p className="text-gray-600">
                  tailwind card slider with splidejs It is a long established
                  fact that a reader will be distracted.
                </p>
              </div>
            </div>

            <div className="w-[100px] p-4 shadow splide__slide lg:max-w-[300px]">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Tailwind Card Slider 3</h3>
                <p className="text-gray-600">
                  tailwind card slider with splidejs It is a long established
                  fact that a reader will be distracted.
                </p>
              </div>
            </div>

            <div className="w-[100px] p-4 shadow splide__slide lg:max-w-[300px]">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Tailwind Card Slider 4</h3>
                <p className="text-gray-600">
                  tailwind card slider with splidejs It is a long established
                  fact that a reader will be distracted.
                </p>
              </div>
            </div>

            <div className="w-[100px] p-4 shadow splide__slide lg:max-w-[300px]">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Tailwind Card Slider 5</h3>
                <p className="text-gray-600">
                  tailwind card slider with splidejs It is a long established
                  fact that a reader will be distracted.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Subscription;
