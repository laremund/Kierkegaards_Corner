import { useState } from 'react';
import './App.css';
import { HomePageContent, PageFooter, PageHeader, WaysOfUnderstanding } from './components';

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
  <>
    <div className="App">
      <PageHeader/>
      <HomePageContent/>
      <PageFooter/>
    </div>
  </>
  )
}

export default App
