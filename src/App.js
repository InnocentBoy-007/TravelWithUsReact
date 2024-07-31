import DocumentTitle from './Components/DocumentTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Components/Navbar';
import ResponsiveAutoExample from './Main/Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './linkPages/Contact';

function App() {
  DocumentTitle("Travel with us")
  return (
    <main>
      <BrowserRouter>
        <BasicExample />
        <Routes>
          <Route index element={<ResponsiveAutoExample />} />
          <Route path="/Mainpage" element={<ResponsiveAutoExample />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;