"use client";

import React, { useState } from "react";
import FacebookMo from "./facebookMobile";
import FacebookDesk from "./facebookDesktop";

const Facebook: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div>
      <section className="block lg:hidden">
        <FacebookMo />
      </section>
      <section className="hidden lg:block">
        <FacebookDesk />
      </section>
    </div>
  );
};

export default Facebook;
