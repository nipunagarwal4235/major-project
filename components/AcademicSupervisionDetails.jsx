import React from 'react'

const AcademicSupervisionDetails = () => {
  return (
    <>
         <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Faculty Development Programmes Attended/Conducted:
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
                  Courses/MOOC Allocated:
                </label>
                {/* <CourseData /> */}
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Post Graduate/ Doctorate Thesis Supervision:
                </label>
                {/* <PostData /> */}
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Sponsored Projects Undertaken:
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
                  Consultancy Projects Undertaken:
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
                  Short term courses /Workshops /Seminars Organized:
                </label>
                <input
                  type="text"
                  id="postAppliedFor"
                  className="w-full px-4 py-2 rounded bg-gray-300"
                  // value={postAppliedFor}
                  // onChange={(e) => setPostAppliedFor(e.target.value)}
                />
              </div>
            </li>
    </>
  )
}

export default AcademicSupervisionDetails