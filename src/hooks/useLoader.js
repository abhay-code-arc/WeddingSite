import { useState } from 'react';

function useLoader() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  const finishLoader = () => {
    // Mount Hero first
    setHeroReady(true);

    // Remove Loader on the next animation frame
    requestAnimationFrame(() => {
      setLoaderVisible(false);
    });
  };

  return {
    loaderVisible,
    heroReady,
    finishLoader,
  };
}

export default useLoader;
