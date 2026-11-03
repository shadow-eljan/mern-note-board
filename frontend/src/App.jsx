import {Route, Routes} from 'react-router';
import { Toaster } from 'react-hot-toast';
import CreatePage from "./pages/CreatePage.jsx"
import HomePage from './pages/HomePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';

const App = () => {
    return (
        <div data-theme="lemonade" className='min-h-screen w-full'>
            {/* <button className="btn">Button</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
            <button onClick={()=> toast.success("Works.")} className='btn btn-primary text-blue-500 p-4 bg-red-500'>Click me</button>
            <Toaster /> */}
            <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background: radioal-gradient(125%_125%_at_50%_10%,#000_60%,#0000_100%),radial-gradient(125%_125%_at_50%_90%,#000_60%,#00FF9D_100%)]' />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/notes/:id" element={<NoteDetailPage />} />
            </Routes>
            <Toaster position="top-center" />

        </div>
        );
};
export default App;