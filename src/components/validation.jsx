
import * as Yup from "yup";


// Yup validation schema
export const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters")
      .required("Message is required"),
  });

