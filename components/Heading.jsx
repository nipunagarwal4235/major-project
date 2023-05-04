import React from "react";

const Heading = () => {
  return (
    <>
      <>
        <div>
          <div className="flex items-center justify-center py-4">
            <h1 className="text-black text-md md:text-2xl lg:text-4xl font-ruda font-semibold text-center">
              Employment Application Form
            </h1>
          </div>
          <div className="py-4 px-16">
            <p className="text-gray-600 text-xs md:text-sm lg:text-md font-ruda text-center">
              BML Munjal University (BMU), founded in 2014 by the promoters of
              the Hero Group of Industries, is a fully residential and
              co-educational university spread over a sprawling, green campus in
              the suburbs of Delhi with state-of-the-art infrastructure and
              facilities. Currently the University comprises four schools:
              School of Engineering & Technology, School of Management, School
              of Economics & Commerce, and School of Law, which offer
              undergraduate, postgraduate and Ph.D. programs in various
              specializations of business administration, commerce, economics,
              law, mathematics, science, engineering, and technology.
            </p>
          </div>
          <div className="px-16 pt-4">
            <h2 className="text-xl text-gray-700 font-ruda font-semibold text-left">
              Application for appointment of Faculty Member
            </h2>
          </div>
        </div>
      </>
    </>
  );
};

export default Heading;
