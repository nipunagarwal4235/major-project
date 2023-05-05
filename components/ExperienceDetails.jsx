import React from "react";
import {TeachingExperienceData} from './Table/Form.jsx'

const ExperienceDetails = () => {
  return (
    <>
    <div className="px-16 py-4">
    <ol className="list-decimal">
      <li>
        <div className="my-4">
          <label
            htmlFor="dob"
            className="font-ruda font-medium text-gray-700 pr-4"
          >
            Teaching Experience:
          </label>
          <TeachingExperienceData />
        </div>
      </li>
      <li>
        <div className="my-4">
          <label
            htmlFor="dob"
            className="font-ruda font-medium text-gray-700 pr-4"
          >
            Industrial Experience/Interaction:
          </label>
          {/* <TableData /> */}
        </div>
      </li>
      </ol>
      </div>
    </>
  );
};

export default ExperienceDetails;
