import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import LoginView from './components/login/LoginView';
import Footer from './components/global/Footer';
import Dashboard from './components/dashboard/Dashboard';

const { Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout style={{ background: '#E3E3E3' }}>
          <Content style={{ margin: '60px 40px 30px' }}>
            <Routes>
              <Route path="/" element={<LoginView />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </>
  );
}

export default App;
