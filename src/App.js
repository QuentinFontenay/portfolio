import './App.css';
import Router from './router/Router';
import Theme from './styles/theme';
import React, { useEffect, useState } from 'react';
import Loading from '../src/components/loading/Loading';
import '../src/components/loading/LoadingAnimation.css';
import ThemeButton from '../src/components/themeButton/ThemeButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <Theme>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <ThemeButton />
          <Router />
        </div>
      )}
    </Theme>
  );
}

export default App;
