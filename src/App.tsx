import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import LoginView from './components/login/LoginView';
import Footer from './components/global/Footer';
import Dashboard from './components/dashboard/Dashboard';
import InvitationsView from './components/dashboard/services/invitations/InvitationsView';
import UsersView from './components/dashboard/services/users/UsersView';

const { Content } = Layout;

function App() {
  return (
    <>
      <BrowserRouter basename={'/apps'}>
        <Layout style={{ background: '#E3E3E3' }}>
          <Content style={{ margin: '60px 40px 30px' }}>
            <Routes>
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/" element={<LoginView />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/invitations" element={<InvitationsView />} />
              <Route path="/users" element={<UsersView />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;