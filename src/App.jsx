import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateOutlet from './components/PrivateOutlet';
import PublicOutlet from './components/PublicOutlet';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<PrivateOutlet />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                    <Route path="/auth" element={<PublicOutlet />}>
                        <Route index element={<Auth />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
