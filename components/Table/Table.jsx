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
    <div>
      <label>Degree</label>
      <input type="text" value={degree} onChange={changeDegree} />
      <label>University</label>
      <input type="text" value={university} onChange={changeUniversity} />
      <label>Year of Joining</label>
      <input type="text" value={joining} onChange={changeJoining} />
      <label>Year of Leaving</label>
      <input type="text" value={leaving} onChange={changeLeaving} />
      <label>CGPA</label>
      <input type="text" value={cgpa} onChange={changeCgpa} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}

export default StudentForm;
