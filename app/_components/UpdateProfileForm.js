"use client";
import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ children, guest }) {
  const [count, setCount] = useState();
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel={"Updating..."}>Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
