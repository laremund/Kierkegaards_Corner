import { useState } from 'react';
import './App.css';
import PageHeader from './pageHeader';
import HomePageContent from './homePageContent';
import WaysOfUnderstanding from './waysOfUnderstanding';
import PageFooter from './pageFooter';

function App() {

  // Page navigation state
  const [whichPage, setWhichPage] = useState('Home');
  // Subheader state
  const subheaderSwitch = (pageState) => {
    switch (pageState) {
      case 'Home':
        return `Life can only be understood backwards; but it must be lived forwards`;
      case 'WaysOfThinking':
        return `Ways of Thinking`;
      case 'WaysOfLiving':
        return `Ways of Living`;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <header className='header'>
        <PageHeader/>
      </header>
      <body>
        <div className='main-subheader-section'>
          <div className='main-subheader-container'>
            <h2 className='main-subheader'>
              {subheaderSwitch(whichPage)}
            </h2>
          </div>
        </div>

        {/* Home page */}
        {whichPage === 'Home' && 
          <HomePageContent/>
        }

      </body>
      <footer className='footer'>
        <PageFooter/>
      </footer>
    </div>
  );
}

export default App;