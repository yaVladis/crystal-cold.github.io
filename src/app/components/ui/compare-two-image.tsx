import React from "react";
import ReactCompareImage from 'react-compare-image';

import Image from "next/image";
import Dakt1 from "@/public/images/dakt-1.jpg";
import Dakt2 from "@/public/images/dakt-2.jpg";

export default function CompareTwoImage() {
  return <div className="section-compare-two-image">
    <ReactCompareImage hover={true} leftImage={`${Dakt1}`} rightImage={`${Dakt2}`} />
  </div>
}
