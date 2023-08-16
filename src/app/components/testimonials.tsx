"use client";
import Image from "next/image";
import { reviews } from "./information.js";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Carousel from "./carousel";

export default function Testimonials() {
  const reviewsBlocks = reviews.map((review, index) => {
    return (
      <div
        key={review.customerName + index}
        className="flex flex-col h-full p-6 bg-gray-800"
        data-aos="fade-up"
      >
        <div>
          <div className="relative inline-flex flex-col mb-4">
            <svg
              className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
            </svg>
          </div>
        </div>
        <blockquote className="text-lg text-gray-400 grow">
          {review.reviewText}
        </blockquote>
        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
          <cite className="text-gray-200 not-italic">
            {review.customerName}
          </cite>{" "}
          -{" "}
          <a
            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
            href="#0"
          >
            {review.city}
          </a>
        </div>
      </div>
    );
  });
  return (
    <section className="section-testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="section-reviews">
        <div className="py-12 md:py-20 border-t border-gray-100">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="section-features__head">
              <h1 className="h2 mb-4 text-black">
                Good service, happy client!
              </h1>
              <BsFillPersonCheckFill />
            </div>
            <p className="h4 mb-2 text-blue-400 text-center font-architects-daughter">
              At our H<span className="text-yellow-400">V</span>
              <span className="text-red-400">AC</span> company, customer
              satisfaction is our utmost priority. We strive to exceed your
              expectations by delivering exceptional service and personalized
              attention to each client.
            </p>
          </div>

            <div className="mobile-reviews">
              <Carousel reviewsBlocks={reviewsBlocks} />
            </div>
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none desktop-reviews">
              {reviewsBlocks}
            </div>
        </div>
      </div>
    </section>
  );
}
