import './App.css';
import ILTTwentySummary from './Pages/ILTTwentySummary/ILTTwentySummary';
import ILTTdataTowers from './Pages/ILTTdataTowers/ILTTdataTowers';

import ILTTloginPage from './Pages/ILTTloginPage/ILTTloginPage';

function App() {
  return (
    <div className="App">
      {/* <ILTTwentySummary /> */}
      {/* <ILTTdataTowers /> */}
      <div className='branding-icon'>
        <img src='/static/images/logos/Branding.png' height={50} alt='Viewers Logo' className='branding-image' />
      </div>
      <div className='login-details'>
        <ILTTloginPage />
      </div>
    </div>
  );
}

export default App;