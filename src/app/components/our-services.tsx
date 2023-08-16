import Image from "next/image";
import { FaWrench } from "react-icons/fa";

import MiniSplit2 from "@/public/images/system-1.jpg";
import System1 from "@/public/images/system-3.jpg";
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
              <h4 className="h4 mb-2 text-blue-400 text-center">
                <span className="text-blue-400">
                  Air Conditioning Repair, Air Conditioning Replacement,
                  Mini-Split Service and Installation, Heating Systems Repair,
                  Heating Systems Replacement, Maintenance, Air Quality,
                  Commercial HVAC Services.
                </span>
              </h4>
              <h3 className="text-lg text-blue-400">
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
              <p className="text-2xl text-blue-400 text-center font-architects-daughter">
                Installation
              </p>
              <div className="feature__item__line"></div>
              <Image src={System1} width={300} height={300} alt={"System1"} />
              <span>
                Installation - Our skilled technicians expertly install HVAC
                (Heating, Ventilation, and Air Conditioning) systems, ensuring
                optimal comfort in your space. We meticulously set up heating
                and cooling units, ductwork, and ventilation to provide
                efficient temperature control and air circulation. Trust us for
                a seamless installation that prioritizes your comfort and indoor
                air quality.
              </span>
            </div>
            {/* item */}
            <div
              className="relative flex flex-col items-center feature__item"
              // data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <p className="text-2xl text-gray-700 text-center font-architects-daughter">
                Maintenance
              </p>
              <div className="feature__item__line"></div>
              <Image
                src={MiniSplit2}
                width={300}
                height={300}
                alt={"MiniSplit2"}
              />
              <span>
                Maintenance - HVAC maintenance involves regular upkeep of
                heating, ventilation, and air conditioning systems to ensure
                optimal performance and efficiency. This includes tasks such as
                cleaning filters, inspecting components, lubricating moving
                parts, and addressing minor repairs. Proper maintenance helps
                extend system lifespan, improve air quality, and reduce energy
                consumption.
              </span>
            </div>
            {/* item */}

            <div
              className="relative flex flex-col items-center feature__item"
              // data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <p className="text-2xl text-gray-700 text-center font-architects-daughter">
                Repair
              </p>
              <div className="feature__item__line"></div>
              <Image src={System2} width={300} height={300} alt={"System2"} />
              <span>
                Repair - Our expert technicians provide comprehensive HVAC
                repair services. We diagnose and address issues with heating,
                ventilation, and air conditioning systems swiftly and
                effectively. From fixing faulty components to restoring optimal
                performance, our team ensures your comfort is restored. Trust us
                for efficient, reliable HVAC repairs.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
