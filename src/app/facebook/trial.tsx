"use client";

import { useState } from "react";
import { supabase } from "../../../supabaseClient";

const Register = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("registrations")
      .insert([{ text1, text2 }]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      setText1("");
      setText2("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="text1" className="block text-gray-700">
            Text 1
          </label>
          <input
            type="text"
            id="text1"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="text2" className="block text-gray-700">
            Text 2
          </label>
          <input
            type="text"
            id="text2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
