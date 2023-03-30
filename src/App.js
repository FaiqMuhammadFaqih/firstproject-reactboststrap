import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Main/>
      <Footer copyright="Pondok Pesantren Quran dan IT Al Mahir" deskripsi="Copyright All right reserved"/>
    </div>
  );
}

export default App;
