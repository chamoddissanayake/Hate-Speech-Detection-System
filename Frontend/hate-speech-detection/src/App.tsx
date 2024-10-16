import React from 'react';
import './App.css';
import HateSpeech from "./HateSpeech";
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
  return (
      <SnackbarProvider maxSnack={3}>
        <HateSpeech />
      </SnackbarProvider>

  );
}

export default App;
