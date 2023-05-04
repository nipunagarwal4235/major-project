import React from 'react'

const AchievementDetails = () => {
  return (
    <>
    <li>
              <div className="my-4">
                <label
                  htmlFor="postAppliedFor"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Patents Filed/Awarded:
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
        <li>
              <div className="my-4">
                <label
                  htmlFor="postAppliedFor"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Awards and Recognitions:
                </label>
                <input
                  type="text"
                  id="postAppliedFor"
                  className="w-full px-4 py-2 rounded bg-gray-300"
                  // value={postAppliedFor}
                  onChange={(e) => setPostAppliedFor(e.target.value)}
                />
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="postAppliedFor"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  List of Publications:
                </label>
              </div>
            </li>
    </>
  )
}

export default AchievementDetails