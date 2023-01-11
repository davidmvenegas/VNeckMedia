import './styles/globals.sass';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/_home/Home';
// Benzinga
import Benzinga600x100 from './views/Benzinga_Ads/600x100/600x100';
import Benzinga600x200 from './views/Benzinga_Ads/600x200/600x200';
import Benzinga600x500 from './views/Benzinga_Ads/600x500/600x500';
import Benzinga1456x180 from './views/Benzinga_Ads/1456x180/1456x180';
// Arkhaus
import Arkhaus600x100v1 from './views/Arkhaus_Ads/600x100_v1/600x100_v1';
import Arkhaus600x100v2 from './views/Arkhaus_Ads/600x100_v2/600x100_v2';
import Arkhaus600x500v1 from './views/Arkhaus_Ads/600x500_v1/600x500_v1';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Benzinga */}
        <Route path="/benzinga/600x100" element={<Benzinga600x100/>} />
        <Route path="/benzinga/600x200" element={<Benzinga600x200/>} />
        <Route path="/benzinga/600x500" element={<Benzinga600x500/>} />
        <Route path="/benzinga/1456x180" element={<Benzinga1456x180/>} />
        {/* Arkhaus */}
        <Route path="/arkhaus/600x100_v1" element={<Arkhaus600x100v1/>} />
        <Route path="/arkhaus/600x100_v2" element={<Arkhaus600x100v2/>} />
        <Route path="/arkhaus/600x500_v1" element={<Arkhaus600x500v1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
