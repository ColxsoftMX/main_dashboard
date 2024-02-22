import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import LoginView from './components/login/LoginView';
import Footer from './components/global/Footer';
import Dashboard from './components/dashboard/Dashboard';
import InvitacionesView from './components/services/InvitacionesView';

const { Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout style={{ background: '#E3E3E3' }}>
          <Content style={{ margin: '60px 40px 30px' }}>
            <BrowserRouter basename='/app'>
              <Routes>
                <Route path="/" element={<LoginView />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/app/invitaciones" element={<InvitacionesView />} />
              </Routes>
            </BrowserRouter>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </>
  );
}

export default App;
