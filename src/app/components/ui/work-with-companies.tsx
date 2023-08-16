'use client';

import { FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Brand1 from "@/public/images/brand-1.svg";
import Brand2 from "@/public/images/brand-2.svg";
import Brand3 from "@/public/images/brand-3.svg";
import Brand4 from "@/public/images/brand-4.png";
import Brand5 from "@/public/images/brand-5.png";

export default function Companies() {
  return (
    <section className="section-companies">
      <div className=" py-24 sm:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-features__head">
            <h2 className="h2 mb-4 text-black text-center">We work with</h2>
            <FaHandshake />
          </div>
          <div className="companies">
            <Image src={Brand1}  alt={"Carrier"} />
            <Image src={Brand2}  alt={"Trane"} />
            <Image src={Brand3}  alt={"Lennox"} />
            <Image src={Brand4}  alt={"Rheem"} />
            <Image src={Brand5}  alt={"Goodman"} />
            {/* <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
