import Loader from './components/Loader/Loader';

import Hero from './sections/Hero/Hero';
import Story from './sections/Story/Story';

import useLoader from './hooks/useLoader';

function App() {
  const { loaderVisible, heroReady, finishLoader } = useLoader();

  return (
    <>
      {loaderVisible && <Loader onFinish={finishLoader} />}

      {heroReady && (
        <>
          <Hero startAnimation />
          <Story />
        </>
      )}
    </>
  );
}

export default App;
