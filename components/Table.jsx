import React from "react";

const Table = () => {
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 ">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="">
              <tr className="text-left">
                <th className="p-3">Degree</th>
                <th className="p-3">College/University</th>
                <th className="p-3">Year of Joining</th>
                <th className="p-3">Year of leaving</th>
                <th className="p-3 text-right">Percentage/CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 ">
                <td className="p-3">
                  <p>Btech. Computer Science</p>
                </td>
                <td className="p-3">
                  <p>BML Munjal University</p>
                </td>
                <td className="p-3">
                  <p>2020</p>
                  
                </td>
                <td className="p-3">
                  <p>2024</p>
                  
                </td>
                <td className="p-3 text-right">
                  <p>$15,792 </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
