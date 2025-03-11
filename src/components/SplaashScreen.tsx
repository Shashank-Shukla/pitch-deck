import React from 'react';

interface SplaashScreenProps {
  onEnter: () => void;
}

const SplaashScreen: React.FC<SplaashScreenProps> = ({ onEnter }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 to-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-teal-600 mb-4">SPLAASH</h1>
        <p className="text-xl text-gray-600 mb-6">Get SPLAASHed! While You Unwind at Home</p>
        <button 
          onClick={onEnter}
          className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default SplaashScreen;
