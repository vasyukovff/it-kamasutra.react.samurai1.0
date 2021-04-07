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
        <Route path="/profile" render={() => {return <Profile posts={props.store.getPosts()}
                                                              textNewPost={props.store.getTextNewPost()} 
                                                              callbackAddPost={props.store.addPost.bind(props.store)} 
                                                              callbackChangeTextNewPost={props.store.changeTextNewPost.bind(props.store)}/>}} />
                                                                
          <Route path="/dialogs" render={() => {return <Dialogs dialogs={props.store.getDialogs()}
                                                                messages={props.store.getMessages()} 
                                                                textNewMessage={props.store.getTextNewMessage()}
                                                                callbackAddMessage={props.store.addMessage.bind(props.store)}
                                                                callbackChangeTextNewMessage={props.store.changeTextNewMessage.bind(props.store)}/>}} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
