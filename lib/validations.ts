import {z} from "zod";

const EMAIL_REQUIRED_MESSAGE = "Email is required";
const VALID_EMAIL_REQUIRED_MESSAGE = "Please provide a valid email address";

const PASSWORD_REQUIRED_MESSAGE = "Password must be at least 6 characters long";
const PASSWORD_TOO_LONG_MESSAGE = "Password cannot exceed 100 characters";

const PASSWORD_FORMAT_UPPERCASE_MESSAGE = "Password must contain at least one uppercase letter";
const PASSWORD_FORMAT_UPPERCASE_REGEX = /[A-Z]/

const PASSWORD_FORMAT_LOWERCASE_MESSAGE = "Password must contain at least one lowercase letter";
const PASSWORD_FORMAT_LOWERCASE_REGEX = /[a-z]/

const PASSWORD_FORMAT_NUMBER_MESSAGE = "Password must contain at least one number";
const PASSWORD_FORMAT_NUMBER_REGEX = /[0-9]/

const PASSWORD_FORMAT_SPECIAL_CHARACTER_MESSAGE = "Password must contain at least one special character";
const PASSWORD_FORMAT_SPECIAL_CHARACTER_REGEX = /[^a-zA-Z0-9]/

const USERNAME_REQUIRED_MESSAGE = "Username must be at least 3 characters long";
const USERNAME_TOO_LONG_MESSAGE = "Username cannot exceed 30 characters";
const USERNAME_FORMAT_MESSAGE = "Username can only contain letters, numbers and underscores";
const USERNAME_FORMAT_REGEX = /^[a-zA-Z0-9_]+$/;

const NAME_REQUIRED_MESSAGE = "Name must be at least 3 characters long";
const NAME_TOO_LONG_MESSAGE = "Name cannot exceed 50 characters";
const NAME_FORMAT_MESSAGE = "Name can only contain letters and spaces";
const NAME_FORMAT_REGEX = /^[a-zA-Z\s]+$/;

export const SignInSchema = z.object({
  email: z
      .string()
      .min(1, {message: EMAIL_REQUIRED_MESSAGE})
      .email({message: VALID_EMAIL_REQUIRED_MESSAGE}),

  password: z
      .string()
      .min(6, {message: PASSWORD_REQUIRED_MESSAGE})
      .max(100, {message: PASSWORD_TOO_LONG_MESSAGE})
})

export const SignUpSchema = z.object({
  email: z
      .string()
      .min(1, {message: EMAIL_REQUIRED_MESSAGE})
      .email({message: VALID_EMAIL_REQUIRED_MESSAGE}),

  password: z
      .string()
      .min(6, {message: PASSWORD_REQUIRED_MESSAGE})
      .max(100, {message: PASSWORD_TOO_LONG_MESSAGE})
      .regex(PASSWORD_FORMAT_UPPERCASE_REGEX, {message: PASSWORD_FORMAT_UPPERCASE_MESSAGE})
      .regex(PASSWORD_FORMAT_LOWERCASE_REGEX, {message: PASSWORD_FORMAT_LOWERCASE_MESSAGE})
      .regex(PASSWORD_FORMAT_NUMBER_REGEX, {message: PASSWORD_FORMAT_NUMBER_MESSAGE})
      .regex(PASSWORD_FORMAT_SPECIAL_CHARACTER_REGEX, {message: PASSWORD_FORMAT_SPECIAL_CHARACTER_MESSAGE}),

  username: z
      .string()
      .min(3, {message: USERNAME_REQUIRED_MESSAGE})
      .max(30, {message: USERNAME_TOO_LONG_MESSAGE})
      .regex(USERNAME_FORMAT_REGEX, {message: USERNAME_FORMAT_MESSAGE}),

  name: z
      .string()
      .min(3, {message: NAME_REQUIRED_MESSAGE})
      .max(30, {message: NAME_TOO_LONG_MESSAGE})
      .regex(NAME_FORMAT_REGEX, {message: NAME_FORMAT_MESSAGE}),
})