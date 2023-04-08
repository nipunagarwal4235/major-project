import React, { useState } from "react";
import Select from "react-select";

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
      <h1>Employment Application Form</h1>
      <p>
        BML Munjal University (BMU), founded in 2014 by the promoters of the
        Hero Group of Industries, is a fully residential and co-educational
        university spread over a sprawling, green campus in the suburbs of Delhi
        with state-of-the-art infrastructure and facilities. Currently the
        University comprises four schools: School of Engineering & Technology,
        School of Management, School of Economics & Commerce, and School of Law,
        which offer undergraduate, postgraduate and Ph.D. programs in various
        specializations of business administration, commerce, economics, law,
        mathematics, science, engineering, and technology.{" "}
      </p>
      <h2> Application for appointment of Faculty Member </h2>
      {/* <form>
        <label
          for="UserEmail"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Email
          </span>
        </label>
      </form> */}
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="postAppliedFor" className="block font-medium">
            Post Applied For
          </label>
          <input
            type="text"
            id="postAppliedFor"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={postAppliedFor}
            onChange={(e) => setPostAppliedFor(e.target.value)}
          />
        </div>
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
        <div className="my-4">
          <label htmlFor="firstName" className="block font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="middleName" className="block font-medium">
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="lastName" className="block font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className="my-4">
          <label htmlFor="dob" className="block font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="maritalStatus" className="block font-medium">
            Marital Status
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
        <div className="my-4">
          <label htmlFor="nationality" className="block font-medium">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="my-4">
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
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label htmlFor="female">Other</label>
        </div>
        <div className="my-4">
          <h4>Present Employment</h4>
          <label htmlFor="designation" className="block font-medium">
            Designation
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <label htmlFor="designation" className="block font-medium">
            Organisation
          </label>
            <div>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </div>
            <div>
            <label htmlFor="dob" className="block font-medium">
            Date of Joining
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="designation" className="block font-medium">
            Scale of pay Rs
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
         </div>
         <div>
          <label htmlFor="designation" className="block font-medium">
            Total Emoluments(per month) Rs
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <div className="my-4">
          <h4>Phone Number</h4>
          <label htmlFor="designation" className="block font-medium">
            Office
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <label htmlFor="designation" className="block font-medium">
            Mobile
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            <label htmlFor="designation" className="block font-medium">
            *Landline
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <div>
        <label htmlFor="designation" className="block font-medium">
            Area of specialisation
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div>
        <label htmlFor="designation" className="block font-medium">
            Current area of research
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div className="my-4">
          <h4>Acadmic record starting with graduation</h4>
          </div>
                </form>
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
      <col></col>
				<col></col>
				<col></col>
				<col></col>
				<col className="w-24"></col>
      </colgroup>
				
			<colgroup/>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Degree</th>
					<th className="p-3">College/University</th>
					<th className="p-3">Year of Joining</th>
					<th className="p-3">Year of leaving</th>
					<th className="p-3 text-right">Percentage/CGPA</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
    </>
  );
}

export default HomePage;
