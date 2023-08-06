import React from "react";
import TextInput from "./components/TextInput";

import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className="min-h-screen bg-slate-500 p-5">
      <div className="mx-auto w-[80%] rounded-lg bg-white p-10">
        <div className="flex items-center justify-between border border-x-0 border-t-0">
          <h2>Private and Confidential</h2>
          <h2>Gentle, Caring & Affordable dentistry</h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">
              Medical and Dental History Form
            </h1>
            <p>
              Welcome to <strong>Rainbow Dental Practice!</strong>
            </p>
            <p>
              We assure you a caring and gentle environment and our complete
              attention to make your visit comfortable and relaxing. To assist
              in determining your treatment needs, please{" "}
              <strong>fill both</strong> sides of this form.
            </p>
          </div>
          <div className="flex w-full flex-col gap-5">
            <h2 className="text-lg font-bold">Contact Details</h2>

            <TextInput text="Title" type="text" />
            <div className="flex gap-5">
              <TextInput text="Surname" type="text" />
              <TextInput text="First name" type="text" />
            </div>
            <div className="flex gap-5">
              <TextInput text="Preferred name" type="text" />
              <TextInput text="Date of Birth" type="date" />
            </div>
            <div className="flex gap-5">
              <TextInput text="Home address" type="text" />
              <TextInput text="Suburb" type="text" />
              <TextInput text="Postcode" type="text" />
            </div>
            <div className="flex gap-5">
              <TextInput text="Telephone Home" type="text" />
              <TextInput text="Mobile" type="text" />
            </div>
            <div className="flex gap-5">
              <TextInput text="Occupation" type="text" />
              <TextInput text="Company" type="text" />
              <TextInput text="Email" type="email" />
            </div>
            <div className="flex gap-5">
              <TextInput text="Emergency contact" type="text" />
              <TextInput text="Relationship to patient" type="text" />
              <TextInput text="Telephone" type="text" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-bold underline">
                Insurance Details:
              </h2>
              <div className="flex  flex-col gap-5 pt-2">
                <ToggleButton text="For Children 2-17 bulk billing under CDBS" />
                <TextInput text="Medicare No" type="text" />
                <TextInput text="Seq No" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
