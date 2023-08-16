"use client";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Unit1 from "@/public/images/dakt-1.png";
import Unit2 from "@/public/images/dakt-2.png";
import Image from "next/image";

export default function CompareTwoImage() {
  return (
    <div className="section-compare-two-images">
      <ReactCompareSlider
        itemOne={
          <div className="image-for-compare">
            <Image src={Unit1} alt={""} />
          </div>
        }
        itemTwo={
          <div className="image-for-compare">
            <Image src={Unit2} alt={""} />
          </div>
        }
      />
    </div>
  );
}
