import { Layout } from 'antd'
import './App.css'
import LoginView from './components/login/LoginView'
import Footer from './components/global/Footer';

const { Content } = Layout;

function App() {

  return (
    <>
      <Layout style={{ background: '#E3E3E3' }}>
        <Content style={{ margin: '60px 40px 40px' }}>
          <LoginView />
        </Content>
        <Footer />
      </Layout>
    </>
  )
}

export default App
