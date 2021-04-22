import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/main/Header';
import Navbar from './components/main/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';



const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => { return <ProfileContainer /> }} />
          <Route path="/dialogs" render={() => { return <DialogsContainer /> }} />
          <Route path="/users" render={() => {return <UsersContainer />}} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
