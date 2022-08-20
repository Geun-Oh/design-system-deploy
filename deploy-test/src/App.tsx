import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from 'resonance-design-system/dist/stories/Accordion';
import { Header  }from 'resonance-design-system/dist/stories/Header';

function App() {
  return (
    <>
    <Header />
    <Accordion innerText='hello!!' width='400px' extraAction='Geun-Oh velog' src='https://velog.io/@kandy1002' loading={false} />
    </>
    
  );
}

export default App;
