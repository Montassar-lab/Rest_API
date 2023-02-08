
import './App.css';
import Listnav from './Components/Listnav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contactlist from './Components/Contactlist';
import Contactadd from './Components/Contactadd';
import ContactEdit from './Components/ContactEdit';


function App() {
  return (
    <div>
      <Listnav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contactlist' element={<Contactlist/>}/>
        <Route path='/ContactAdd' element={<Contactadd/>}/>
        <Route path='/Contactedit/:id' element={<ContactEdit/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
