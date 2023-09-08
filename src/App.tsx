import React from 'react';
import { Globalstyle } from './styles/Global';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { SectionBaby } from './components/sectionBaby';

export function App() {
  return (
      <>
        <Header />
        <Nav />
        <SectionBaby />
        <Globalstyle />
      </>
  );
}


