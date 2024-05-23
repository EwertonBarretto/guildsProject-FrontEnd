import GlobalStyle from './styles/global';
import RoutesApp from './routes';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <div>
      <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
      </AuthProvider>
    </div>
  );
}

export default App;
