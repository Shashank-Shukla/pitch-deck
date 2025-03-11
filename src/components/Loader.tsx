import React, { useEffect, useState } from "react";
import "./Loader.css";

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
        const randomIncrement = Math.floor(Math.random() * 3);
      currentProgress += randomIncrement;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 25);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="loader-container">
      <div className="loading-text wave" style={{ "--progress": `${progress}%` } as React.CSSProperties}>
        SPLAASH
      </div>
      <p className="loading-percentage">{progress}%</p>
    </div>
  );
};

export default Loader;



// import React, { useEffect, useState } from 'react';

// interface LoaderProps {
//   onComplete: () => void;
// }

// const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let currentProgress = 0;
//     const interval = setInterval(() => {
//       currentProgress += 1;
//       setProgress(currentProgress);
      
//       if (currentProgress >= 100) {
//         clearInterval(interval);
//         onComplete();  // Notify parent component when loading is done
//       }
//     }, 20);
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 to-orange-200">
//       <div className="w-full max-w-md px-4">
//         <div className="bg-gray-200 rounded-full h-4 mb-4">
//           <div className="bg-teal-600 h-4 rounded-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
//         </div>
//         <p className="text-center text-xl font-bold mb-4">{progress}%</p>
//       </div>
//     </div>
//   );
// };

// export default Loader;
