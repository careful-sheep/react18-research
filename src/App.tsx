import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomaticBatching from './pages/automaticBatching/AutomaticBatching';
import ConcurrentAPIS from './pages/concurrentAPIS/ConcurrentAPIS';
import SsrForSuspence from './pages/ssrForSuspence/SsrForSuspence';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AutomaticBatching />} />
                <Route path="automaticBatching" element={<AutomaticBatching />} />
                <Route path="concurrentAPIS" element={<ConcurrentAPIS />} />
                <Route path="ssrForSuspence" element={<SsrForSuspence />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
