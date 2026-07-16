import Loader from './components/Loader/Loader';

import Hero from './sections/Hero/Hero';
import Story from './sections/Story/Story';
import Timeline from './sections/Timeline/Timeline';
import Countdown from './sections/Countdown/Countdown';
import Closing from './sections/Closing/Closing';

import useLoader from './hooks/useLoader';

function App() {
  const { loaderVisible, heroReady, finishLoader } = useLoader();

  return (
    <>
      {loaderVisible && <Loader onFinish={finishLoader} />}

      {heroReady && (
        <main className="site">
          <Hero startAnimation />
          <Story />
          <Countdown />
          <Timeline />
          <Closing />
        </main>
      )}
    </>
  );
}

export default App;
