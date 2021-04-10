import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/main/Header';
import Navbar from './components/main/Navbar';
import Profile from './components/profile/Profile';
import News from './components/news/News';
import Music from './components/music/Music';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
        <Route path="/profile" render={() => {return <Profile state={props.store.getState().profilePage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}} />
                                                                
          <Route path="/dialogs" render={() => {return <Dialogs state={props.store.getState().dialogsPage}
                                                                dispatch={props.store.dispatch.bind(props.store)}/>}} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
