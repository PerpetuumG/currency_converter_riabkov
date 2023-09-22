import AppEntryPoint from '../pages/index.jsx';
import AppThemeProvider from './provider/ThemeProvider.jsx';
import AppQueryProvider from './provider/QueryProvider.jsx';

function App() {
  return (
    <AppThemeProvider>
      <AppQueryProvider>
        <AppEntryPoint />
      </AppQueryProvider>
    </AppThemeProvider>
  );
}

export default App;
