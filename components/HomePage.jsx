import React, { useState } from "react";
import Select from "react-select";
// import {TableData , EmployeeData} from '../components/Table/Form.jsx';
import {TableData , EmployeeData,ProfessionalData, MembershipData, ConferenceData, CourseData,PostData} from "../components/Table/Form.jsx";


const options = [
  { value: "Mechanical", label: "Mechanical" },
  { value: "Electrical", label: "Electrical" },
  { value: "Computer Science", label: "Computer Science" },
];

function HomePage() {
  const [postAppliedFor, setPostAppliedFor] = useState("");
  const [department, setDepartment] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [scaleOfPay, setScaleOfPay] = useState("");
  const [totalEmoluments, setTotalEmoluments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
  };
  return (
    <>
      <div className="flex items-center justify-center py-4">
        <h1 className="text-black text-md md:text-2xl lg:text-4xl font-ruda font-semibold text-center">
          Employment Application Form
        </h1>
      </div>
      <div className="py-4 px-16">
        <p className="text-gray-600 text-md font-ruda text-center">
          BML Munjal University (BMU), founded in 2014 by the promoters of the
          Hero Group of Industries, is a fully residential and co-educational
          university spread over a sprawling, green campus in the suburbs of
          Delhi with state-of-the-art infrastructure and facilities. Currently
          the University comprises four schools: School of Engineering &
          Technology, School of Management, School of Economics & Commerce, and
          School of Law, which offer undergraduate, postgraduate and Ph.D.
          programs in various specializations of business administration,
          commerce, economics, law, mathematics, science, engineering, and
          technology.
        </p>
      </div>
      <div className="px-16 pt-4">
        <h2 className="text-xl text-gray-700 font-ruda font-semibold text-left">
          Application for appointment of Faculty Member
        </h2>
      </div>
      <div className="px-16">
        <form onSubmit={handleSubmit}>
          <ol className="list-decimal">
            <li>
              <div className="my-4">
                <label
                  htmlFor="postAppliedFor"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Post Applied For:
                </label>
                <input
                  type="text"
                  id="postAppliedFor"
                  className="w-1/3 px-4 py-2 rounded bg-gray-300"
                  value={postAppliedFor}
                  onChange={(e) => setPostAppliedFor(e.target.value)}
                />
              </div>
            </li>
            <div className="my-4">
              <label htmlFor="department" className="block font-medium">
                Department
              </label>
              <Select
                id="department"
                options={options}
                value={department}
                onChange={(selectedOption) => setDepartment(selectedOption)}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <li>
                <div className="my-4">
                  <label
                    htmlFor="firstName"
                    className="font-ruda font-medium text-gray-700 pr-4"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded bg-gray-300"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </li>

              <div className="my-4">
                <label
                  htmlFor="middleName"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Middle Name:
                </label>
                <input
                  type="text"
                  id="middleName"
                  className="w-full px-4 py-2 rounded-md bg-gray-300"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="lastName"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 rounded-md bg-gray-300"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-1/5 px-4 py-2 rounded-md bg-gray-300"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </li>
            <li>
              <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
                <label
                  htmlFor="maritalStatus"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Marital Status:
                </label>
                <input
                  type="radio"
                  id="single"
                  name="maritalStatus"
                  value="single"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
                <label htmlFor="single">Single</label>
                <input
                  type="radio"
                  id="married"
                  name="maritalStatus"
                  value="married"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
                <label htmlFor="married">Married</label>
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="nationality"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Nationality:
                </label>
                <input
                  type="text"
                  id="nationality"
                  className="w-1/5 px-4 py-2 rounded-md bg-gray-300"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
            </li>
            <li>
              <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
                <label htmlFor="gender" className="block font-medium">
                  Gender
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                ></input>
                <label
                  htmlFor="male"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                ></input>
                <label
                  htmlFor="female"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Female
                </label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={(e) => setGender(e.target.value)}
                ></input>
                <label
                  htmlFor="Other"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Other
                </label>
              </div>
            </li>
            <li>
              <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
                <h4>Address</h4>
                <div>
                  <label htmlFor="designation" className="block font-medium">
                    Permanent Address
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />

                  <label htmlFor="designation" className="block font-medium">
                    Present Address
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                  <label htmlFor="designation" className="block font-medium">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>
              </div>
            </li>
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
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
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
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
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
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
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
                      value={designation}
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
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
                <h4>Phone Number</h4>
                <div>
                  <label htmlFor="designation" className="block font-medium">
                    Office
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />

                  <label htmlFor="designation" className="block font-medium">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                  <label htmlFor="designation" className="block font-medium">
                    *Landline
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>
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
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
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
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
            </li>

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
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Employment:
                </label>
                <EmployeeData/>
              </div>
            </li>
            <li>
              <div className="my-4">
                <label
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Professional Training/Certification Required:
                </label>
                <ProfessionalData />
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
                <MembershipData />
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
                <ConferenceData />
              </div>
            </li>
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
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Teaching Experience:
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
                <CourseData />
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
                <PostData />
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
                  htmlFor="dob"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  Industrial Experience/Interaction:
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
                  Patents Filed/Awarded: 9. Short term courses /Workshops
                  /Seminars Organized:
                </label>
                <input
                  type="text"
                  id="postAppliedFor"
                  className="w-full px-4 py-2 rounded bg-gray-300"
                  value={postAppliedFor}
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
                  Short term courses /Workshops /Seminars Organized:
                </label>
                <input
                  type="text"
                  id="postAppliedFor"
                  className="w-full px-4 py-2 rounded bg-gray-300"
                  value={postAppliedFor}
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
                  Awards and Recognitions:
                </label>
                <input
                  type="text"
                  id="postAppliedFor"
                  className="w-full px-4 py-2 rounded bg-gray-300"
                  value={postAppliedFor}
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
          </ol>
        </form>
      </div>

      <button type="button" className="px-8 py-3 font-semibold rounded">
        NEXT PAGE
      </button>
    </>
  );
}

export default HomePage;
