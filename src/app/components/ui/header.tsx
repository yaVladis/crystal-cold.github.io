import MobileMenu from "./mobile-menu";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../../../../public/images/crystal.png";
import Image from "next/image";
export default function Header() {
  return (
    <header className="w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 ">
          <a href="#" className="logo">
            <Image src={Logo} width={300} height={300} alt={"System1"} />
          </a>
          {/* Site branding */}
          <div className="shrink-0 mr-4 hidden md:flex">
            <ul className="desktop-menu">
              <li>
                <a href="#section-our-services">Our services</a>
              </li>
              <li>
                <a href="#section-why-us">Why us</a>
              </li>
              <li>
                <a href="#section-reviews">Reviews</a>
              </li>
              <li>
                <a href="#section-contact-us">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Desktop navigation */}
          <nav className="md:grow">
            <ul className="flex grow justify-end flex-wrap text-blue-400 items-center desktop-menu">
              <li>
                <a className="flex align-center" href="tel:+1-818-929-0448">
                  <FaPhoneAlt />
                  <span className="pl-3 hidden md:flex">+1-818-929-0448</span>
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
