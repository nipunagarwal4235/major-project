import React from "react";
import {TableData} from './Table/Form.jsx'
import { ErrorMessage, Field } from "formik";
import WizardStep from "./WizardStep";

const AcademicDetails = () => {
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
              Academic Record starting with Graduation:
            </label>
            <TableData />
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
            />
          </div>
        </li>
      </ol>
      </div>
    </>
  );
};

export default AcademicDetails;
