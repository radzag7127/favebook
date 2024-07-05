import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4">
      <div
        className="container mx-auto px-4 text-gray-500"
        style={{ maxWidth: "980px", fontSize: "11.5px" }}
      >
        <div className="flex flex-wrap justify-start mb-3">
          <span className="mr-4">English (UK)</span>
          <a href="#" className="hover:underline mr-4">
            Bahasa Indonesia
          </a>
          <a href="#" className="hover:underline mr-4">
            Basa Jawa
          </a>
          <a href="#" className="hover:underline mr-4">
            Bahasa Melayu
          </a>
          <a href="#" className="hover:underline mr-4">
            日本語
          </a>
          <a href="#" className="hover:underline mr-4">
            العربية
          </a>
          <a href="#" className="hover:underline mr-4">
            Français (France)
          </a>
          <a href="#" className="hover:underline mr-4">
            Español
          </a>
          <a href="#" className="hover:underline mr-4">
            한국어
          </a>
          <a href="#" className="hover:underline mr-4">
            Português (Brasil)
          </a>
          <a href="#" className="hover:underline mr-4">
            Deutsch
          </a>
          <button className="bg-gray-200 text-gray-700 border border-gray-400 h-5 w-8 flex items-center justify-center text-xl">
            +
          </button>
        </div>

        <hr className="mb-3 border-gray-300" />

        {/* Bagian link */}
        <div className="flex flex-wrap justify-start mb-4">
          <a href="#" className="hover:underline mr-4">
            Sign Up
          </a>
          <a href="#" className="hover:underline mr-4">
            Log In
          </a>
          <a href="#" className="hover:underline mr-4">
            Messenger
          </a>
          <a href="#" className="hover:underline mr-4">
            Facebook Lite
          </a>
          <a href="#" className="hover:underline mr-4">
            Video
          </a>
          <a href="#" className="hover:underline mr-4">
            Places
          </a>
          <a href="#" className="hover:underline mr-4">
            Games
          </a>
          <a href="#" className="hover:underline mr-4">
            Marketplace
          </a>
          <a href="#" className="hover:underline mr-4">
            Meta Pay
          </a>
          <a href="#" className="hover:underline mr-4">
            Meta Store
          </a>
          <a href="#" className="hover:underline mr-4">
            Meta Quest
          </a>
          <a href="#" className="hover:underline mr-4">
            Meta AI
          </a>
          <a href="#" className="hover:underline mr-4">
            Instagram
          </a>
          <a href="#" className="hover:underline mr-4">
            Threads
          </a>
          <a href="#" className="hover:underline mr-4">
            Fundraisers
          </a>
          <a href="#" className="hover:underline mr-4">
            Services
          </a>
          <a href="#" className="hover:underline mr-4">
            Voting Information Centre
          </a>
          <a href="#" className="hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline mr-4">
            Privacy Centre
          </a>
          <a href="#" className="hover:underline mr-4">
            Groups
          </a>
          <a href="#" className="hover:underline mr-4">
            Meta in Indonesia
          </a>
          <a href="#" className="hover:underline mr-4">
            About
          </a>
          <a href="#" className="hover:underline mr-4">
            Create ad
          </a>
          <a href="#" className="hover:underline mr-4">
            Create Page
          </a>
          <a href="#" className="hover:underline mr-4">
            Developers
          </a>
          <a href="#" className="hover:underline mr-4">
            Careers
          </a>
          <a href="#" className="hover:underline mr-4">
            Cookies
          </a>
          <a href="#" className="hover:underline flex items-center mr-4">
            AdChoices
            <img
              src="/addChoices.svg"
              alt="AdChoices"
              className="ml-1 w-4 h-4"
            />
          </a>
          <a href="#" className="hover:underline mr-4">
            Terms
          </a>
          <a href="#" className="hover:underline mr-4">
            Help
          </a>
          <a href="#" className="hover:underline">
            Contact uploading and non-users
          </a>
        </div>

        <div className="text-start text-xs text-gray-500">Meta © 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
