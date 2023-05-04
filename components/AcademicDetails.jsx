import React from "react";

const AcademicDetails = () => {
  return (
    <>
      <li>
        <div className="my-4">
          <label
            htmlFor="dob"
            className="font-ruda font-medium text-gray-700 pr-4"
          >
            Academic Record starting with Graduation:
          </label>
          {/* <TableData /> */}
        </div>
      </li>
      <li>
        <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
          <label htmlFor="designation" className="block font-medium">
            Area of specialisation
          </label>
          <input
            type="text"
            id="designation"
            className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
            // value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
      </li>
      <li>
        <div>
          <label htmlFor="designation" className="block font-medium">
            Current area of research
          </label>
          <input
            type="text"
            id="designation"
            className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
            // value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
      </li>
    </>
  );
};

export default AcademicDetails;
