import './App.css';
import Router from './router/Router';
import Theme from './styles/theme';
import { useEffect, useState } from 'react';
import Loading from '../src/components/loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

  return (
    <Theme>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Router />
        </div>
      )}

    </Theme>
  );
}

export default App;
