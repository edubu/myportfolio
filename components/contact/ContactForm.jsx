import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { useState } from "react";

function ContactForm() {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyihv8i5GuDx92vKrq4-xnK6rLehTnlTqSEC8rZt9XqZuXy3G1x52KAQ_1L243h1wa6DA/exec";

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitButtonDisabled(true);
            let requestBody = new FormData(e.target);
            fetch(scriptURL, {
              method: "POST",
              body: requestBody,
            })
              .then((response) => {
                console.log("Success!", response);
                setSubmitButtonDisabled(false);
              })
              .catch((error) => {
                setSubmitButtonDisabled(false);
                console.error("Error!", error.message);
              });
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          {!submitButtonDisabled && (
            <div className="mt-6">
              <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                <Button
                  title="Send Message"
                  type="submit"
                  aria-label="Send Message"
                />
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
