"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupSeen = Cookies.get("popupSeen");
    if (!popupSeen) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    Cookies.set("popupSeen", "true", { expires: 1 }); // Set cookie to expire in 1 day
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-500">WARNING!</h2>
        <p className="mb-4">
          This is an educational phishing awareness website for the field study
          of FILKOM UB 2024. Do not use it for malicious purposes. Any misuse of
          this website will be subject to legal action.
        </p>
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
