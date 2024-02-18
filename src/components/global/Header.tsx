import { Layout, Menu } from 'antd';
import { useLanguageHeader } from '../../utils/translations/i18n';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

interface HeaderViewProps {
  activeTab?: string;
}

const HeaderView: React.FC<HeaderViewProps> = ({ activeTab }) => {
  const { t } = useLanguageHeader();
  const navigate = useNavigate();

  return (
    <Header style={{ padding: 0, background: 'white', borderRadius: 8 }}>
      <div style={{ display: 'flex', background: 'white', borderRadius: 8, justifyContent: 'space-between' }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={[activeTab || '']} style={{ width: '100%', height: '50px', borderRadius: '8px 0 0 0', boxShadow: '0px 5px 3px -5px #DFDFDF'}} disabled>
          <Menu.Item key={t('H1')} style={{ textAlign: 'left', marginLeft: '20px' }}>
            <h1 style={{ color: 'black', margin: '0', padding: 0 }}>{t('H1')}</h1>
          </Menu.Item>

        </Menu>

        <Menu theme="light" mode="horizontal" defaultSelectedKeys={[activeTab || '']} style={{ width: '25%', height: '50px', borderRadius: '0 8px 0 0', boxShadow: '0px 5px 3px -5px #DFDFDF' }}>
        <Menu.Item key={t('H2')} onClick={() => navigate('/dashboard')}>
            {t('H2')}
          </Menu.Item>
          <Menu.Item key={t('H3')}>{t('H3')}</Menu.Item>
          <Menu.Item key={t('H4')} onClick={() => navigate('/')}>
            {t('H4')}
          </Menu.Item>
</Menu>
      </div>
    </Header>
  );
};

export default HeaderView;
