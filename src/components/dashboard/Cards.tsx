import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

interface DashboardCardProps {
  nombre: string;
  imagen: string;
  path: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ nombre, imagen, path }) => (
  <Col xs={24} sm={12} md={8} lg={5} style={{margin: '0 20px 0 10px', padding: '20px'}}>
    <Card
      hoverable
      cover={<img alt={nombre} src={imagen} style={{ height: '150px', objectFit: 'cover' }} />}
    >
      <Meta title={nombre} description={<a href={path}>Ir al dashboard</a>} />
    </Card>
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
