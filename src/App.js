import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Typing from './components/Typing';

function App() {
  return (
    <>
     <Navbar title="WordWizard"/>   
      <div className="wrap">
       <TextForm />
       {/* <Typing /> */}
     </div>
     </>
  );
}

export default App;
