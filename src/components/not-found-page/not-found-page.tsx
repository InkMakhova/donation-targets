import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const NotFoundPage = () => (
  <div style={{margin: '2em'}}>
    <Breadcrumb style={{marginBottom: '2em'}}>
      <Breadcrumb.Item href={AppRoute.Root}>
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>Page not found</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{margin: '2em', textAlign: 'center'}}>
      <h1>404</h1>
      <p>Ups... Something went wrong</p>
      <Link
        to={AppRoute.Root}
        style={{fontSize: '1.2em'}}
      >
        Back home
      </Link>
    </div>
  </div>
)

export default NotFoundPage;
