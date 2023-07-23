import { FaHandshake } from "react-icons/fa";

export default function Companies() {
  return (
    <section className="section-companies">
      <div className=" py-24 sm:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-features__head">
            <h2 className="h2 mb-4 text-black text-center">We work with</h2>
            <FaHandshake />
          </div>
          <div className="flex mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 companies">
            <p className="text-center text-3xl text-blue-400">Carrier</p>
            <p className="text-center text-3xl text-yellow-400">Trane</p>
            <p className="text-center text-3xl text-blue-400">Lennox</p>
            <p className="text-center text-3xl text-red-400">Rheem</p>
            <p className="text-center text-3xl text-blue-400">Goodman</p>
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
