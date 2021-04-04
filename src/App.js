import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/main/Header';
import Navbar from './components/main/Navbar';
import Profile from './components/profile/Profile';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
    </div>
  );
}



export default App;
