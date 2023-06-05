import Login from './components/login/login';
import './App.css';
import Registration from './components/login/registration';
import SignUpForm from './components/login/login';
import Homesection from './components/homesection/homesection';
import Header from './components/header/header';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Homesection />
       <SignUpForm />
      <Registration /> 
    </div>
  );
}

export default App;
