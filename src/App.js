import './App.css';
import Routers from './Routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Contexts/Auth';

function App() {
  return (
    <AuthProvider >
      <div className='mt-3'>
        <Routers/>
      </div>
    </AuthProvider>
  );
};

export default App;
