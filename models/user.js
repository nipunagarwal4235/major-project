import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
  postAppliedFor: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  officeNumber: {
    type: String,
    required: true,
  },
  landlineNumber: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var User = mongoose.model("User", user);

export default User;
