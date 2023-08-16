"use client";

import React, { useState, useEffect } from "react";
export default function ButtonTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setShowButton(window.scrollY > 300);
    };

    const handleScroll = () => {
      requestAnimationFrame(handleScrollButtonVisibility);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return showButton ? (
    <button className="scrollToTop" onClick={handleScrollToTop}>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white scrollToTop__chevron1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>

      <svg
        className="scrollToTop__chevron2 w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 12"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5m8 6L5 7l-4 4"
        />
      </svg>
    </button>
  ) : (
    <></>
  );
}
