import React from "react";

// import { Ring } from "react-awesome-spinners";

const ContactForm = () => {
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);
  // const [loader, setLoader] = useState(false);

  // const initialValues = {
  //   honey: "",
  //   name: "",
  //   company: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   message: "",
  // };

  // const onSubmit = async values => {
  //   console.log("submitted data: ", values);

  //   setLoader(true);
  //   if (values.honey !== "") {
  //     setError("Spam suspected");
  //     console.log("spam suspected");
  //   } else {
  //     try {
  //       const response = await fetch("http://localhost:1337/formcontacts", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(values),
  //       });
  //       const data = await response.json();
  //       setLoader(false);
  //       console.log("Successfully sent to Strapi!");
  //       console.log("response received: ", data);
  //       if (data.statusCode) {
  //         setError(data.message);
  //       } else if (data.created_at) {
  //         setSuccess(true);
  //       }
  //     } catch (error) {
  //       console.log("error received: ", error.message);
  //       setLoader(false);
  //     }
  //   }
  // };

  return (
    <div className="px-4 my-12 max-w-3xl mx-auto antialiased text-gray-800 font-sans">
      <h1 className="text-4xl font-black">Enquiry Form</h1>
      <p className="text-gray-500">We love to hear from you.</p>

      <form className="p-8 space-y-6 mt-6  bg-gray-100">
        <div className="sm:flex sm:space-x-2 sm:space-y-0 space-y-6">
          <div className="sm:w-1/2">
            <input type="hidden" name="honey" value="honey" />
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-200 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-400"
            />
          </div>
          <div className="sm:w-1/2">
            <label htmlFor="company" className="font-bold">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="optional"
              className="border border-gray-200 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-400 placeholder-gray-200"
            />
          </div>
        </div>
        <div className="sm:flex sm:space-x-2 sm:space-y-0 space-y-6">
          <div className="sm:w-1/2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-200 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-400"
            />
          </div>
          <div className="sm:w-1/2">
            <label htmlFor="phone" className="font-bold">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="optional"
              className="border border-gray-200 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-400 placeholder-gray-200"
            />
            <p className="text-sm text-gray-400">
              Please include the country code for non-Singapore number.
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="font-bold">
            Address
          </label>
          <textarea
            as="textarea"
            name="address"
            placeholder="optional"
            className="border border-gray-200 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-400 placeholder-gray-200"
          />
          <p className="text-sm text-gray-400">
            Please provide your mailing address only if you require us to reply
            by mail
          </p>
        </div>
        <div>
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            as="textarea"
            name="message"
            rows="5"
            col="35"
            className="border border-gray-200 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-400"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          {/* <div className="spinner">
            {loader && (
              <Ring color={"var(--color-primary-3)"} size="40" sizeUnit="px" />
            )}
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
