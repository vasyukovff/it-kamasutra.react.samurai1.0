import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/main/Header';
import Navbar from './components/main/Navbar';
import Profile from './components/profile/Profile';
import News from './components/news/News';
import Music from './components/music/Music';
import DialogsContainer from './components/dialogs/DialogsContainer';



const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => { return <Profile /> }} />
          <Route path="/dialogs" render={() => { return <DialogsContainer /> }} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
