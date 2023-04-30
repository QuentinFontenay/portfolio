import './App.css';
import React, { useEffect, useState } from 'react';
import Router from './router/Router';
import Theme from './styles/theme';
import Loading from './components/loading/Loading';
import './components/loading/LoadingAnimation.css';
import ThemeButton from './components/themeButton/ThemeButton';

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
