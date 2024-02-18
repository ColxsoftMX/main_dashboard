import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const { Meta } = Card;

interface DashboardCardProps {
  nombre: string;
  imagen: string;
  path: string;
  descripcion: string;	
}

const DashboardCard: React.FC<DashboardCardProps> = ({ nombre, imagen, path, descripcion }) => (
  <Col xs={18} sm={8} md={6} lg={5} style={{ margin: '0 10px 0 10px', padding: '20px' }}>
    <a href={path}>
      <div style={{ boxShadow: '0px 0px 10px #DFDFDF', borderRadius: 8, border: '1px solid #DFDFDF' }} >
        <Card
          hoverable
          cover={<img alt={nombre} src={imagen} style={{ height: '150px', objectFit: 'cover' }} />}
        >
          <Meta title={nombre} description={descripcion} />
          <Button type="primary" style={{marginTop: '20px', width: '100%'}}>
            {`Ir a ${nombre.toLowerCase()}`}
          </Button>
        </Card>
      </div>
    </a>
  </Col>
);

interface DashboardCardsProps {
  data: DashboardCardProps[];
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ data }) => (
  <Row justify="center" gutter={[16, 16]}>
    {data.map((item, index) => (
      <DashboardCard key={index} {...item} />
    ))}
  </Row>
);

export default DashboardCards;
