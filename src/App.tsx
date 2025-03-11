import React from "react";
import PitchDeck from "./components/PitchDeck";

const App: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <PitchDeck />
    </div>
  );
};

export default App;
