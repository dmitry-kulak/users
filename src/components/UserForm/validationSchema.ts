import * as Yup from "yup";

const phoneRegexp =
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const urlRegexp =
  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;

export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(phoneRegexp, "Invalid phone number")
    .required("Required"),
  website: Yup.string().matches(urlRegexp, "Invalid url").required("Required"),
  comment: Yup.string(),
});
