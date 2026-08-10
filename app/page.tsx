"use client";

import AmbientBackground from "@/components/Background/AmbientBackground";
import FullPage from "@/components/layout/FullPage";

import Greeting from "@/components/Hero/Greeting";
import Phase1 from "@/components/Hero/Phase1";
import Phase2 from "@/components/Hero/Phase2";
import BirthDaySection from "@/components/Hero/BirthdaySection"
import DuaSection from "@/components/Hero/DuaSection";
import FutureSection from "@/components/Hero/FutureSection";

import { useState } from "react";
import LetterUnlock from "@/components/Hero/LetterUnlock";

export default function Home() {

  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <AmbientBackground />

      <FullPage
        onSectionChange={(index) => setActiveSection(index)}
      >
        <div className="section">
          <Greeting />
        </div>

        {/* <div className="section">
          <Phase1 active={activeSection === 1} />
        </div>

        <div className="section">
          <Phase2 active={activeSection === 2} />
        </div>

        <div className="section">
          <BirthDaySection
            active={activeSection === 3}
            name="Azmina"
          />
        </div>

        <div className="section">
          <DuaSection
            active={activeSection === 4}
          />
        </div>

        <div className="section">
          <FutureSection
            active={activeSection === 5}
          />
        </div> */}

        <div className="section">
          <LetterUnlock
            active={activeSection === 1}
          />
        </div>

        <div className="section">
          <FutureSection
            active={activeSection === 2}
          />
        </div>
      </FullPage>
    </>
  );
}