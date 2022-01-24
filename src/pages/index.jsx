import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Projects from '../components/Projects';



let darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
darkTheme = responsiveFontSizes(darkTheme)

export default function indexPage() {
  return <ThemeProvider theme={darkTheme}>
    
    <Header />
    <HeroSection />
    <Projects />
  </ThemeProvider>;
}


