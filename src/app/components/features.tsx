import Image from "next/image";
import { FaWrench } from "react-icons/fa";

import MiniSplit2 from "@/public/images/mini-split2.jpg";
import System1 from "@/public/images/system-1.jpg";
import System2 from "@/public/images/system-2.jpg";

export default function OurServices() {
  return (
    <section className="section-features border-t border-gray-100">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:pb-10"
        id="section-our-services"
      >
        {/* <div className="py-12 md:py-20"> */}
        <div className="py-12 md:py-20" data-aos="fade-up">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-15 md:pb-5">
            <div className="section-features__head">
              <h2 className="h2 mb-4 text-black">Our Services</h2>
              <FaWrench />
            </div>
            <div>
              <h4 className="h4 mb-2 text-yellow-400 text-center">
                <span className="text-red-400">Heating system</span> &{" "}
                <span className="text-blue-400">Air Conditioning</span>
              </h4>
              <h3 className="text-lg text-gray-700">
                Commercial and Residential
              </h3>
            </div>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* item */}
            <div
              className="relative flex flex-col items-center feature__item"
              // data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <p className="text-2xl text-gray-700 text-center font-architects-daughter">Installation</p>
              <div className="feature__item__line"></div>
              <Image src={System1} width={300} height={300} alt={"System1"} />
              <span>
                Installation - refers to the process of setting up and
                integrating the various components and equipment of a heating,
                ventilation, or air conditioning system in a building or space.
              </span>
            </div>
            {/* item */}
            <div
              className="relative flex flex-col items-center feature__item"
              // data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <p className="text-2xl text-gray-700 text-center font-architects-daughter">Replacement</p>
              <div className="feature__item__line"></div>
              <Image
                src={MiniSplit2}
                width={300}
                height={300}
                alt={"MiniSplit2"}
              />
              <span>
                Replacement - refers to the process of removing an existing
                heating, ventilation, or air conditioning system and installing
                a new one in its place.
              </span>
            </div>
            <div
              className="relative flex flex-col items-center feature__item"
              // data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <p className="text-2xl text-gray-700 text-center font-architects-daughter">Repair</p>
              <div className="feature__item__line"></div>
              <Image src={System2} width={300} height={300} alt={"System2"} />
              <span>
                Repair - refers to the process of fixing or restoring a
                malfunctioning or damaged heating, ventilation, or air
                conditioning system.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
