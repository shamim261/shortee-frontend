import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
