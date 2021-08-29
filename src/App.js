import React from 'react';
import './index.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Vocab from './Vocab'
import AllVocab from './AllVocab'
import { Link } from 'react-router-dom'
class App extends React.Component{
    render() {
    return (
        <div className="App container">
            <Router>
                <header>Learn Chinese!</header>
                <Switch>
                    <Route path="/home/">
                        <Link to="/vocab/" >
                            <button className="LessonContent" >Flash Cards</button>
                        </Link>
                        <button className="LessonContent">Lesson 1</button>
                        <button className="LessonContent">About</button>
                    </Route>
                    <Route path="/vocab/">
                        <AllVocab />
                    </Route>
                    <Route path="/vocab/:id">
                        <Vocab  />
                    </Route>                
                </Switch>
                <footer>Copyright 2021</footer>
            </Router>
        </div>
    )
}
}
export default App;