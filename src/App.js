import Login from './components/login/login';
import './App.css';

import Homesection from './components/homesection/homesection';

import Form from './components/form';
import Errorpage from './components/errorpage/errorpage';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Homesection />
     {/* <Form />  */}
     <Errorpage />

    </div>
  );
}

export default App;
