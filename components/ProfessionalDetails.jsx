import React from 'react'

const ProfessionalDetails = () => {
  return (
    <>
        <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Professional Training/Certification Required:
                </label>
                {/* <TableData /> */}
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Membership of Professional societies/bodies:
                </label>
                {/* <MembershipData /> */}
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Key Seminars/Workshops/Conferences attended:
                </label>
                {/* <ConferenceData /> */}
              </div>
            </li>
    </>
  )
}

export default ProfessionalDetails