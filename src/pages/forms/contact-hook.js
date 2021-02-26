import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Ring } from "react-awesome-spinners";

const ContactForm = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [test, setTest] = useState(false);

  const handleClick = () => {
    setTest(!test);
  };

  const onSubmit = async submittedData => {
    console.log("submitted data: ", submittedData);

    setLoader(true);
    if (submittedData.honey !== "") {
      setError("Spam suspected");
      console.log("spam suspected");
    } else {
      try {
        // setTimeout(() => {
        //   console.log("data received: ", data);
        //   setLoader(false);
        // }, 2000);
        const response = await fetch("http://localhost:1337/formcontacts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submittedData),
        });
        const data = await response.json();
        setLoader(false);
        console.log("New Form Successfully sent to Strapi!");
        console.log("response received: ", data);
        if (data.statusCode) {
          setError(data.message);
        } else if (data.created_at) {
          setSuccess(true);
          reset();
        }
      } catch (error) {
        console.log("error received: ", error.message);
        setError(error.message);
        setLoader(false);
      }
    }
  };

  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <div className="max-w-3xl px-4 mx-auto my-12 antialiased text-gray-800">
        <h1 className="text-4xl font-black">Enquiry Form</h1>
        <p className="text-gray-500">We love to hear from you.</p>

        <form
          className="p-8 mt-6 space-y-6 bg-gray-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-6 sm:flex sm:space-x-2 sm:space-y-0">
            <div className="sm:w-1/2">
              <input type="hidden" name="honey" value="" ref={register} />
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-purple-400"
                ref={register}
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
                className="block w-full px-4 py-2 placeholder-gray-200 border border-gray-200 rounded focus:outline-none focus:border-purple-400"
                ref={register}
              />
            </div>
          </div>
          <div className="space-y-6 sm:flex sm:space-x-2 sm:space-y-0">
            <div className="sm:w-1/2">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-purple-400"
                ref={register}
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
                className="block w-full px-4 py-2 placeholder-gray-200 border border-gray-200 rounded focus:outline-none focus:border-purple-400"
                ref={register}
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
              className="block w-full px-4 py-2 placeholder-gray-200 border border-gray-200 rounded focus:outline-none focus:border-purple-400"
              ref={register}
            />
            <p className="text-sm text-gray-400">
              Please provide your mailing address only if you require us to
              reply by mail
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
              className="block w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-purple-400"
              ref={register}
            />
          </div>
          <div>
            {loader ? (
              <Ring color="#A855F7" size="40" sizeUnit="px" />
            ) : success ? (
              <p className="font-bold text-center text-green-500">
                Your enquiry has been submitted
              </p>
            ) : error ? (
              <>
                <p className="font-bold text-center text-red-600">
                  We have encountered an error - {error} <br />
                </p>
                <p className="text-center text-red-600">
                  Please try again. If problem persist, please email us directly
                  at contactus@singaporewomenassociation.org
                </p>
              </>
            ) : (
              <button
                className="w-full px-5 py-3 text-white transition duration-300 ease-in-out bg-purple-500 rounded-md shadow hover:bg-purple-900"
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
          <div>
            {/* <button
            className={
              test
                ? "bg-green-500 px-5 py-3 rounded-md text-white"
                : "bg-red-500 px-5 py-3 rounded-md text-white"
            }
            type="submit"
          >
            Change whole class set
          </button> */}
          </div>
        </form>
        {/* <button
        onClick={handleClick}
        className={`${
          test ? "bg-red-500" : "bg-green-500"
        } px-5 py-3 rounded-md text-white cursor-pointer mt-6 mx-auto block focus:outline-none`}
      >
        Test State: {test ? "True" : "False"}
      </button> */}
      </div>
    </>
  );
};

export default ContactForm;
