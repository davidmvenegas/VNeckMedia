import './styles/globals.sass';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/_home/Home';
import Benzinga600x100 from './views/Benzinga_Ads/600x100/600x100';
import Benzinga600x200 from './views/Benzinga_Ads/600x200/600x200';
import Benzinga600x500 from './views/Benzinga_Ads/600x500/600x500';
import Benzinga1456x180 from './views/Benzinga_Ads/1456x180/1456x180';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/benzinga/600x100" element={<Benzinga600x100/>} />
        <Route path="/benzinga/600x200" element={<Benzinga600x200/>} />
        <Route path="/benzinga/600x500" element={<Benzinga600x500/>} />
        <Route path="/benzinga/1456x180" element={<Benzinga1456x180/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
