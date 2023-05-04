import React from "react";

const ReferralDetails = () => {
  return (
    <>
      <li>
        <div className="my-4">
          <label
            htmlFor="dob"
            className="font-ruda font-medium text-gray-700 pr-4"
          >
            Name and address of three referees:
          </label>
          {/* <TableData /> */}
        </div>
      </li>
      <li>
        <div className="my-4">
          <label
            htmlFor="postAppliedFor"
            className="font-ruda font-medium text-gray-700 pr-4"
          >
            Satement of Purpose:
          </label>
          <div>
            <textarea
              placeholder="a.please indicate why do you want to join BMU?
                                 b.How do you meet the job requirements?
                                 c.A description on which research teaching development programmer you would like to undertake and the course you would like to teach at UG and PG levels/ ."
              class="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
            ></textarea>
          </div>
        </div>
      </li>
    </>
  );
};

export default ReferralDetails;
