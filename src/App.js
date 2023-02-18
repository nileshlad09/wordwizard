import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title="WordWizard"/>   
      <div className="wrap">
       <TextForm />
     </div>
     </>
  );
}

export default App;
