// Step 1: Import React
import * as React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation";
// Step 2: Define your component
const ContactPage = ({ id, theme }) => {
  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      
      try {
        const response = await fetch(
          "/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const result = await response.json();
        if (result.success) {
          alert("Message sent successfully!");
          resetForm(); // Reset form fields after successful submission
        } else {
          alert("Error sending message.");
        }
      } catch (error) {
        alert("There was an error sending the message.");
      }
      setSubmitting(false);
    },
  });

  return (
    <section id={id} className="w-full px-5 md:px-44 lg:px-48 xl:px-72  py-5">
      <h1 className="mb-16 mt-20 text-4xl font-extrabold flex justify-center">
      Lets Connect
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className={`border shadow-inner shadow-gray-100 rounded-lg w-full p-5 md:p-10  ${
          theme === "dark" ? "  border-gray-400" : "border-gray-300 "
        }`}
      >
        <p className="text-center w-full lg:w-1/2 flex justify-center font-bold mx-auto mb-5">
          Connect with me if you’d like to collaborate on exciting web projects
          or discuss development ideas!
        </p>
        <div className="w-full flex flex-col mb-5">
          <label htmlFor="name" className="text-lg font-bold mb-2">
            Name <span className=" text-red-100">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`h-12 px-3 shadow-xl rounded-lg focus:ring-1 focus:ring-green-600 focus:outline-none  ${
              theme === "dark"
                ? "text-gray-300 bg-white "
                : "text-white bg-gray-100"
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error text-red-100">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="w-full flex flex-col mb-5">
          <label htmlFor="email" className="text-lg font-bold mb-2">
            Email <span className=" text-red-100">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`h-12 px-3 shadow-xl rounded-lg focus:ring-1 focus:ring-green-600 focus:outline-none ${
              theme === "dark"
                ? "text-gray-300 bg-white "
                : "text-white bg-gray-100"
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error text-red-100">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="w-full flex flex-col mb-5">
          <label htmlFor="subject" className="text-lg font-bold mb-2">
            Subject <span className=" text-red-100">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className={`h-12 px-3 shadow-xl rounded-lg focus:ring-1 focus:ring-green-600 focus:outline-none  ${
              theme === "dark"
                ? "text-gray-300 bg-white "
                : "text-white bg-gray-100"
            }`}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="error text-red-100">{formik.errors.subject}</p>
          ) : null}
        </div>
        <div className="w-full flex flex-col mb-5">
          <label htmlFor="message" className="text-lg font-bold mb-2">
            Message <span className=" text-red-100">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`h-52 md:h-40 py-3 focus:ring-1 focus:ring-green-600 focus:outline-none px-3 rounded-lg  ${
              theme === "dark"
                ? "text-gray-300 bg-white shadow-xl "
                : "text-white bg-gray-100 shadow-xl"
            }`}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="error text-red-100">{formik.errors.message}</p>
          ) : null}
        </div>
        <div className="w-full flex flex-col mb-5">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="h-12 rounded-lg cursor-pointer bg-green-600 hover:bg-purple-100 text-white text-lg font-bold"
          >
            {formik.isSubmitting ? "Sending..." : "Send Message"}
            
          </button>
        </div>
      </form>
    </section>
  );
};

// Step 3: Export your component
export default ContactPage;
