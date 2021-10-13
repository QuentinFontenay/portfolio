import './App.css';
import Router from './router/Router';
import Theme from './styles/theme';
import React, { useEffect, useState } from 'react';
import Loading from '../src/components/loading/Loading';
import '../src/components/loading/LoadingAnimation.css';
import ThemeButton from './components/themeButton/themeButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
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
