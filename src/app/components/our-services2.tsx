import Image from "next/image";

import MiniSplit2 from "@/public/images/system-1.jpg";
import System1 from "@/public/images/system-3.jpg";
import System2 from "@/public/images/system-2.jpg";
import { FaWrench } from "react-icons/fa";

export default function OurServices2() {
  return (
    <section id="section-our-services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-100">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
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
              <h3 className="text-2xl text-blue-400">
                Commercial and Residential
              </h3>
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={MiniSplit2}
                  width={333}
                  height={333}
                  alt="OurServices 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="h3 font-architects-daughter text-blue-400 mb-2">
                    Installation
                  </div>
                  <ul className="text-lg text-gray-500 -mb-2">
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-5 checkbox-mark"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Installation - Our skilled technicians expertly install
                        HVAC (Heating, Ventilation, and Air Conditioning)
                        systems, ensuring optimal comfort in your space. We
                        meticulously set up heating and cooling units, ductwork,
                        and ventilation to provide efficient temperature control
                        and air circulation. Trust us for a seamless
                        installation that prioritizes your comfort and indoor
                        air quality.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={System1}
                  width={333}
                  height={333}
                  alt="OurServices 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter h3 text-yellow-600 mb-2">
                    Maintenance
                  </div>
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <ul className="text-lg text-gray-500 -mb-2">
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-5 checkbox-mark"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Maintenance - HVAC maintenance involves regular upkeep
                        of heating, ventilation, and air conditioning systems to
                        ensure optimal performance and efficiency. This includes
                        tasks such as cleaning filters, inspecting components,
                        lubricating moving parts, and addressing minor repairs.
                        Proper maintenance helps extend system lifespan, improve
                        air quality, and reduce energy consumption.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={System2}
                  width={333}
                  height={333}
                  alt="OurServices 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter h3 text-red-600 mb-2">
                    Repair
                  </div>
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <ul className="text-lg text-gray-500 -mb-2">
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-5 checkbox-mark"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Repair - Our expert technicians provide comprehensive
                        HVAC repair services. We diagnose and address issues
                        with heating, ventilation, and air conditioning systems
                        swiftly and effectively. From fixing faulty components
                        to restoring optimal performance, our team ensures your
                        comfort is restored. Trust us for efficient, reliable
                        HVAC repairs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
