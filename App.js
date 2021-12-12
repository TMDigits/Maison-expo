import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import Theme from './src/theme/Theme';

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <Main />
    </PaperProvider>
  );
}
