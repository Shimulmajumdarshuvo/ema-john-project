
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Header></Header>
      <h2 className='text-info'>This is the firs page</h2>
      
      <Shop></Shop>

    </div>
  );
}

export default App;
