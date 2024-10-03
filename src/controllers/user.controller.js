import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from front end
  const { username, email, fullname, password } = req.body;
  console.log("email: ", email);

  // validation - not empty
  if (
    [username, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user already exists : username or email

  const exists = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (exists) {
    throw new ApiError(409, "User already exists");
  }
  // check for img , check for avatar
  const avatarLOCALpath = req.files?.avatar?.[0]?.path;
  console.log(req.files);

  const coverimageLOCALpath = req.files?.coverimage?.[0]?.path;

  if (!avatarLOCALpath) {
    throw new ApiError(400, "Avatar is required");
  }

  // if available upload them to cloudnary , avatar
  const avatar = await uploadOnCloudinary(avatarLOCALpath);
  const coverimage = await uploadOnCloudinary(coverimageLOCALpath);
  if (!avatar) {
    throw new ApiError(400, "Avatar is not there required");
  }
  // create user object
  const user = await User.create({
    username: username.toLowerCase(),
    email,
    fullname,
    password,
    avatar: avatar.url,
    coverimage: coverimage?.url || "",
  });
  // remove password and refresh token  field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );
  if (!createdUser) {
    throw new ApiError(500, "something went wrong");
  }
  // check for user creation
  return res
    .status(201)
    .json(new ApiResponse(201, "User Registered Successfully ", createdUser));
});

export { registerUser };
