import Hero from './sections/Hero/Hero';
import Loader from './components/Loader/Loader';

import useLoader from './hooks/useLoader';

function App() {
  const isLoading = useLoader();

  return (
    <>
      {isLoading && <Loader />}

      <Hero />
    </>
  );
}

export default App;
