import connectDB from "../../middlewear/mongodb";
import User from "../../models/user";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Check if name, email or password is provided
    const {
      postAppliedFor,
      firstName,
      lastName,
      middleName,
      dateOfBirth,
      maritalStatus,
      nationality,
      gender,
      permanentAddress,
      presentAddress,
      emailAddress,
      mobileNumber,
      officeNumber,
      landlineNumber,
    } = req.body;
    if (
      postAppliedFor &&
      firstName &&
      lastName &&
      middleName &&
      dateOfBirth &&
      maritalStatus &&
      nationality &&
      gender &&
      permanentAddress &&
      presentAddress &&
      emailAddress &&
      mobileNumber &&
      officeNumber &&
      landlineNumber
    ) {
      try {
        // Hash password to store it in DB

        var user = new User({
          postAppliedFor,
          firstName,
          lastName,
          middleName,
          dateOfBirth,
          maritalStatus,
          nationality,
          gender,
          permanentAddress,
          presentAddress,
          emailAddress,
          mobileNumber,
          officeNumber,
          landlineNumber,
        });
        // Create new user
        var usercreated = await user.save();
        return res.status(200).send(usercreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
