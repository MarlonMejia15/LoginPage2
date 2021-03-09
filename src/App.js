import './App.css';
import Brand from './components/BrandHeader/BrandHeader'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Todo from './components/pages/Todo/Todo';

function App() {
  return (
    <Router>
    <body>
    <Brand></Brand>


    <switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/todos" exact>
        <Todo />
      </Route>

        <Route path="/login" exact>
          <Login></Login>
        </Route>
    </switch>

    </body>
    </Router>
  );
}

export default App;
