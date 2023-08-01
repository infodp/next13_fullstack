"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Form = ({ formValues, onSubmitForm }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (formValues) {
      setName(formValues.name);
      setAge(formValues.age);
    }
  }, [formValues]);

  const btnBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, age };
    onSubmitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-3 px-6">
        Save
      </button>
      <button
        onClick={btnBack}
        type="button"
        className="bg-gray-400 hover:bg-gray-600 text-white font-bold p-3 px-6"
      >
        Cancel
      </button>
    </form>
  );
};

export default Form;
