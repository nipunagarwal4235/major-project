import React from 'react'

const EmployementDetails = () => {
  return (
    <>
        <li>
              <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
                <h4>Present Employment</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="py-4">
                    <label
                      htmlFor="designation"
                      className="font-ruda font-medium text-gray-700 pr-4"
                    >
                      Designation:
                    </label>
                    <input
                      type="text"
                      id="designation"
                      className="w-\ px-4 py-2 rounded-md bg-gray-300"
                      // value={designation}
                      // onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="designation"
                      className="font-ruda font-medium text-gray-700 pr-4"
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      className="w-/ px-4 py-2 rounded-md bg-gray-300"
                      // value={designation}
                      // onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dob"
                      className="font-ruda font-medium text-gray-700 pr-4"
                    >
                      Date of Joining
                    </label>
                    <input
                      type="date"
                      id="dob"
                      className="w-/ px-4 py-2 rounded-md bg-gray-300"
                      // value={dob}
                      // onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="py-4">
                    <label
                      htmlFor="designation"
                      className="font-ruda font-medium text-gray-700 pr-4"
                    >
                      Scale of pay Rs
                    </label>
                    <input
                      type="text"
                      id="designation"
                      className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                      // value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div className="py-4">
                    <label
                      htmlFor="designation"
                      className="font-ruda font-medium text-gray-700 pr-4"
                    >
                      Total Emoluments(per month) Rs
                    </label>
                    <input
                      type="text"
                      id="designation"
                      className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                      // value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Employment:
                </label>
                {/* <EmployeeData /> */}
              </div>
            </li>
    </>
  )
}

export default EmployementDetails