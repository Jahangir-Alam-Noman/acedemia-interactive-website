import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { createContext, useEffect, useState } from 'react';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Instructor from './components/Instructor/Instructor';
import About from './components/About/About';

export const RingContext = createContext('api');
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./course.JSON')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <RingContext.Provider value={[courses]}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/instructor">
              <Instructor></Instructor>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </div>
    </RingContext.Provider>
  );
}
export default App;
