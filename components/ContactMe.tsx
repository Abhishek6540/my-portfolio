"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { sendMessage } from "@/server/action"; // Assuming this is correct
import { contactSchema, defaultValues, ContactFormData } from "@/validatiions/contact-me";

// InputField component (included in the same file for now)
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  icon?: "user" | "mail" | "phone" | "subject";
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, placeholder, icon, ...props }, ref) => {
    const renderIcon = () => {
      switch (icon) {
        case "user":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0A18 18 0 0112 21.8a18 18 0 01-7.5-1.7z" />
            </svg>
          );
        case "mail":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M4 4h16v16H4z" fill="none" />
              <path d="M4 4h16v16H4V4zm8 8l8-5H4l8 5z" />
            </svg>
          );
        case "phone":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.4-2.4a1 1 0 011 .2 8.8 8.8 0 002.4 1 1 1 0 011 1v3.4a1 1 0 01-1 1A19.3 19.3 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 8.8 8.8 0 001 2.4 1 1 0 01.2 1l-2.4 2.4z" />
            </svg>
          );
        case "subject":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M3 5h18M3 9h12m-12 4h18m-18 4h12" />
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <div className="w-full flex flex-col items-start gap-2">
        <div className="w-full flex items-center bg-[#f3f3f3] gap-4 border rounded-full px-6 lg:px-9 text-base lg:text-xl">
          {renderIcon()}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            className="bg-transparent py-4 lg:py-6 w-full outline-none"
          />
        </div>
      </div>
    );
  }
);

InputField.displayName = "InputField";

// -------------------- //
//      ContactMe       //
// -------------------- //

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Received form data:", data);

    try {
      const result = await sendMessage(data);
      console.log("Success:", result);
      reset(); // Clears the form after submission
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <div
      id="contact-me"
      className="relative main-container w-full my-10 md:my-16 lg:my-20 bg-white flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-[30px] md:rounded-[40px] lg:rounded-[50px]"
    >
      {/* Heading */}
      <div className="relative w-full text-center">
        <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">
          Contact Me
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          Contact Me
        </h3>
      </div>

      {/* Form Section */}
      <div className="w-full flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-[30px] md:rounded-[40px] lg:rounded-[50px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full flex flex-col items-start gap-8"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
            <div className="flex flex-col w-full">
              <InputField
                type="text"
                placeholder="Full Name *"
                icon="user"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <InputField
                type="email"
                placeholder="Email *"
                icon="mail"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <InputField
                type="tel"
                placeholder="Phone *"
                icon="phone"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <InputField
                type="text"
                placeholder="Subject *"
                icon="subject"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
          </div>

          {/* Message Textarea */}
          <div className="w-full flex flex-col items-start gap-2">
            <textarea
              {...register("message")}
              placeholder="Your Message *"
              aria-label="Message"
              className="w-full h-60 px-6 lg:px-9 text-base lg:text-xl py-4 lg:py-6 border bg-[#f3f3f3] rounded-3xl outline-none resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex flex-row items-center gap-2 bg-mainColor text-black py-4 px-6 lg:px-8 rounded-[40px] hover:bg-opacity-90 transition-all duration-300 text-base lg:text-2xl font-bold hover:bg-[#f3f3f3] hover:text-mainColor hover:border hover:border-mainColor"
          >
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M2 21l21-10L2 2v7l15 2-15 2v7z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Memoji Image */}
      <Image
        src="/images/memoji-with-imac.svg"
        width={435}
        height={435}
        alt="contact-me"
        className="absolute bottom-0 right-2 sm:right-5 lg:right-16 w-[200px] sm:w-[250px] md:w-[300px] lg:w-auto"
      />
    </div>
  );
};

export default ContactMe;
