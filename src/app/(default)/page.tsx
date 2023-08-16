export const metadata = {
  title: "Crystal Cold",
  description: "HVAC company",
};

import Hero from "@/src/app/components/hero";
import OurServices from "@/src/app/components/our-services";
import OurServices2 from "@/src/app/components/our-services2";
import ContactUs from "@/src/app/components/contact-us";
import Zigzag from "@/src/app/components/zigzag";
import Testimonials from "@/src/app/components/testimonials";
import ButtonTop from "@/src/app/components/ui/button-top";
import Companies from "../components/ui/work-with-companies";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <OurServices /> */}
      <OurServices2 />
      <Zigzag />
      <Testimonials />
      <ContactUs />
      <Companies/>
      <ButtonTop />
    </>
  );
}
