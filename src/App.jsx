import React from "react";
import TextInput from "./components/TextInput";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className="min-h-screen bg-slate-500 p-5">
      <div className="mx-auto w-[80%] rounded-lg bg-white p-10">
        <Header />
        <MedicalHistoryForm />
        <InsuranceDetails />
        <MinorGuardianForm />
        <DentalQuestioner />
      </div>
    </div>
  );
}

const Header = () => (
  <div className="flex items-center justify-between border border-x-0 border-t-0">
    <h2>Private and Confidential</h2>
    <h2>Gentle, Caring & Affordable dentistry</h2>
  </div>
);

const MedicalHistoryForm = () => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Medical and Dental History Form</h1>
      <p>
        Welcome to <strong>Rainbow Dental Practice!</strong>
      </p>
      <p>
        We assure you a caring and gentle environment and our complete attention
        to make your visit comfortable and relaxing. To assist in determining
        your treatment needs, please <strong>fill both</strong> sides of this
        form.
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
    </div>
  </div>
);

const InsuranceDetails = () => (
  <div className="mb-5 flex flex-col ">
    <div className="flex flex-col">
      <h2 className="text-base font-bold underline">Insurance Details:</h2>
      <div className="flex items-center gap-5  ">
        <div className="w-full ">
          <ToggleButton text="For Children 2-17 bulk billing under CDBS" />
        </div>
        <div className="flex w-full  gap-x-5">
          <TextInput text="Medicare No" type="text" />
          <TextInput text="Seq No" type="text" />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center gap-5">
        <div className="w-full ">
          <ToggleButton text="I have Private Health Insurance with Dental Cover." />
        </div>
        <div className="flex w-full gap-x-5">
          <TextInput text="Insurance Name" type="text" />
          <TextInput text="Member No" type="text" />
          <TextInput text="Seq No" type="text" />
        </div>
      </div>
    </div>
    <h2>(Rainbow Dental is a preferred provider for CBHS Health Funds)</h2>
  </div>
);

const MinorGuardianForm = () => (
  <div className="border border-slate-950 p-5">
    <p>For patients under 16 only:</p>
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-4">
        <TextInput text="Person responsible" type="text" />
      </div>
      <div className="col-span-4">
        <TextInput text="Relationship to patient" type="text" />
      </div>
      <div className="col-span-4">
        <TextInput text="Mobile" type="text" />
      </div>
      <div className="col-span-6">
        <TextInput text="Address" type="text" />
      </div>
      <div className="col-span-6">
        <TextInput text="Postcode" type="text" />
      </div>
    </div>
  </div>
);

const DentalQuestioner = () => (
  <div>
    <TextInput
      text="How did you hear about Rainbow Dental Practice?"
      type="text"
    />

    <ToggleButton text="Would you like us to contact you about Special Offers?" />
    <div>
      <h2>Dental Questionnaire</h2>
      <div>
        <TextInput text="When was your last visit to a dentist?" type="text" />
        <TextInput text="Text" type="text" />
      </div>
    </div>
  </div>
);
export default App;
