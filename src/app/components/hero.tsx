export default function Hero() {
  return (
    <section className="section-hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className="h1 mb-4 text-gray-800"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              Crystal cold
            </h1>
            <p
              className="text-2xl text-red-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Refrigeration <span className="text-yellow-400">and</span>{" "}
              <span className="text-blue-400">air conditioning</span>
            </p>
            <h3
              className="text-2xl text-gray-800 mb-10 font-architects-daughter"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Bringing climate control to perfection
            </h3>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-yellow-400 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="#0"
                >
                  <a href="tel:+1-999-999-9999">
                    Call us
                  </a>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-red-400 hover:bg-purple-700 w-full sm:w-auto sm:ml-4"
                  href="#section-contact-us"
                >
                  Send message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}