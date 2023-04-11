import React, { useState } from "react";

function StudentForm(props) {
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [joining, setJoining] = useState("");
  const [leaving, setLeaving] = useState("");
  const [cgpa, setCgpa] = useState("");

  const changeDegree = (event) => {
    setDegree(event.target.value);
  };

  const changeUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const changeJoining = (event) => {
    setJoining(event.target.value);
  };

  const changeLeaving = (event) => {
    setLeaving(event.target.value);
  };

  const changeCgpa = (event) => {
    setCgpa(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      degree,
      university,
      joining,
      leaving,
      cgpa,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setDegree("");
    setUniversity("");
    setJoining("");
    setLeaving("");
    setCgpa("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Degree:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={degree}
            onChange={changeDegree}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            University:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={university}
            onChange={changeUniversity}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year of Joining:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={joining}
            onChange={changeJoining}
          />
        </div>

        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year of Leaving:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={leaving}
            onChange={changeLeaving}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            CGPA:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={cgpa}
            onChange={changeCgpa}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

export default StudentForm;
