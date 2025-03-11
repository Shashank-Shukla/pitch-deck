import React, { useState } from 'react';
import Loader from './Loader';
import SplaashScreen from './SplaashScreen';
import Slides from './Slides';

const PitchDeck: React.FC = () => {
  const [stage, setStage] = useState<'loading' | 'logo' | 'slides'>('loading');

  return (
    <>
      {stage === 'loading' && <Loader onComplete={() => setStage('logo')} />}
      {stage === 'logo' && <SplaashScreen onEnter={() => setStage('slides')} />}
      {stage === 'slides' && <Slides />}
    </>
  );
};

export default PitchDeck;
