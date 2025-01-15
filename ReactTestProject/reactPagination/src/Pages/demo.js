import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const StudentRegistrationJourney = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNo: '',
    emergencyContactNo: '',
    studentEmailId: '',
    maritalStatus: '',
    gender: '',
    dateOfBirth: '',
    nativeCountry: '',
    nativeState: '',
    nativeCity: '',
    postalCode: '',
    passportNo: '',
    passportExpiry: '',
    interestedCountry: '',
    englishProficiencyTest: '',
    visaRejectionStatus: '',
    gapInEducation: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeScreen onNext={handleNext} />;
      case 2:
        return <PersonalInformation formData={formData} onChange={handleInputChange} onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <AddressPassportInformation formData={formData} onChange={handleInputChange} onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return <AcademicInterests formData={formData} onChange={handleInputChange} onNext={handleNext} onPrevious={handlePrevious} />;
      case 5:
        return <EducationalBackground formData={formData} onChange={handleInputChange} onNext={handleNext} onPrevious={handlePrevious} />;
      case 6:
        return <BackgroundInformation formData={formData} onChange={handleInputChange} onNext={handleNext} onPrevious={handlePrevious} />;
    //   case 7:
    //     return <DocumentUpload onNext={handleNext} onPrevious={handlePrevious} />;
    //   case 8:
    //     return <FinalReview formData={formData} onSubmit={handleSubmit} onPrevious={handlePrevious} />;
    //   case 9:
    //     return <Confirmation />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    setStep(9);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ProgressIndicator currentStep={step} totalSteps={9} />
      {renderStep()}
    </div>
  );
};
export default StudentRegistrationJourney;

const ProgressIndicator = ({ currentStep, totalSteps }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            index + 1 <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
    <div className="text-center">
      Step {currentStep} of {totalSteps}
    </div>
  </div>
);

const WelcomeScreen = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-4">Welcome to Student Registration</h1>
    <p className="mb-6">Please complete the following steps to register as a student.</p>
    <button onClick={onNext} className="bg-blue-500 text-white px-4 py-2 rounded">
      Start Registration
    </button>
  </div>
);

const PersonalInformation = ({ formData, onChange, onNext, onPrevious }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <div className="grid grid-cols-2 gap-4">
        <select name="title" value={formData.title} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
        </select>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          placeholder="First Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={onChange}
          placeholder="Middle Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          placeholder="Last Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={onChange}
          placeholder="Mobile No."
          className="border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="emergencyContactNo"
          value={formData.emergencyContactNo}
          onChange={onChange}
          placeholder="Emergency Contact No."
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="studentEmailId"
          value={formData.studentEmailId}
          onChange={onChange}
          placeholder="Student Email ID"
          className="border p-2 rounded"
          required
        />
        <select name="maritalStatus" value={formData.maritalStatus} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        <select name="gender" value={formData.gender} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={onChange}
          className="border p-2 rounded"
          required
        />
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onPrevious} className="bg-gray-300 text-black px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  </div>
);

const AddressPassportInformation = ({ formData, onChange, onNext, onPrevious }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Address & Passport Information</h2>
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <div className="grid grid-cols-2 gap-4">
        <select name="nativeCountry" value={formData.nativeCountry} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Native Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <select name="nativeState" value={formData.nativeState} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Native State</option>
          <option value="State1">State 1</option>
          <option value="State2">State 2</option>
          <option value="State3">State 3</option>
        </select>
        <select name="nativeCity" value={formData.nativeCity} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Native City</option>
          <option value="City1">City 1</option>
          <option value="City2">City 2</option>
          <option value="City3">City 3</option>
        </select>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={onChange}
          placeholder="Postal Code"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="passportNo"
          value={formData.passportNo}
          onChange={onChange}
          placeholder="Passport No."
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          name="passportExpiry"
          value={formData.passportExpiry}
          onChange={onChange}
          className="border p-2 rounded"
          required
        />
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onPrevious} className="bg-gray-300 text-black px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  </div>
);

const AcademicInterests = ({ formData, onChange, onNext, onPrevious }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Academic Interests</h2>
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <div className="grid grid-cols-2 gap-4">
        <select name="interestedCountry" value={formData.interestedCountry} onChange={onChange} className="border p-2 rounded">
          <option value="">Select Interested Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <select name="englishProficiencyTest" value={formData.englishProficiencyTest} onChange={onChange} className="border p-2 rounded">
          <option value="">Select English Proficiency Test</option>
          <option value="IELTS">IELTS</option>
          <option value="TOEFL">TOEFL</option>
          <option value="PTE">PTE</option>
        </select>
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onPrevious} className="bg-gray-300 text-black px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  </div>
);

const EducationalBackground = ({ onNext, onPrevious }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Educational Background</h2>
    <p>Add your educational qualifications here.</p>
    <div className="mt-6 flex justify-between">
      <button onClick={onPrevious} className="bg-gray-300 text-black px-4 py-2 rounded">
        Previous
      </button>
      <button onClick={onNext} className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  </div>
);

const BackgroundInformation = ({ formData, onChange, onNext, onPrevious }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Background Information</h2>
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Visa Rejection Status</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="visaRejectionStatus"
                value="Yes"
                checked={formData.visaRejectionStatus === 'Yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="visaRejectionStatus"
                value="No"
                checked={formData.visaRejectionStatus === 'No'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <select name="gapInEducation" value={formData.gapInEducation} onChange={onChange} className="border p-2 rounded">
          <option value="">Gap in Education</option>
          <option value="0">No gap</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3+">3+ years</option>
        </select>
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onPrevious} className="bg-gray-300 text-black px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  </div>
);