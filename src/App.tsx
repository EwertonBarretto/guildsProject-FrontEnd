import RoutesApp from './routes';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
