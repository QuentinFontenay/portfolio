import './App.css';
import Router from './router/Router';
import Theme from './styles/theme';
function App() {
  return (
    <Theme>
      <div className="App">
        <Router />
      </div>
    </Theme>
  );
}

export default App;
