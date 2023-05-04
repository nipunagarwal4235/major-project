import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="px-8 pb-4 mx-auto w-screen">
        <div className="relative flex items-center justify-between shadow-lg">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              src="https://aniportalimages.s3.amazonaws.com/media/details/BML_Munjal_University2022070710280920220707104023.jpg"
              width={120}
              height={50}
              alt="BML logo"
            />
          </a>
          <ul className="items-center space-x-8 flex">
            <li>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                HR Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
