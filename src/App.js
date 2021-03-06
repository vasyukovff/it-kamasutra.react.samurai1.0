import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/main/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/main/HeaderContainer';
import Login from './components/login/Login';



const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => { return <ProfileContainer /> }} />
          <Route path="/dialogs" render={() => { return <DialogsContainer /> }} />
          <Route path="/users" render={() => {return <UsersContainer />}} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
