import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/navi/Navi';
import Footer from './layouts/Footer'
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Navi/>
      
      <Container className="main">
        <Dashboard/>
      </Container>
      
      <Footer/>
    </div>
  );
}

export default App;

{/* <Container className="main">
        <Dashboard/>
      </Container> */}