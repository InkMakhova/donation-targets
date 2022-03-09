import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchTargetDetails } from '../../services/api-actions';
import { AppRoute } from '../../const';
import { Target } from '../../types/target';
import { Breadcrumb, Descriptions } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import NotFoundPage from '../not-found-page/not-found-page';

type TargetId = {
  id: string;
}

const TargetDetailsPage = (): JSX.Element => {
  const {id} = useParams<TargetId>();
  const [targetDetails, setTargetDetails] = useState({
    id: '',
    name: '',
    type: '',
    code: ''
  });
  const [isNoData, setIsNoData] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const handleTargetDetails = (target: Target) => {
    setTargetDetails({
      id: String(target.giftTargetId),
      name: target.name,
      type: target.type,
      code: target.paymentCode,
    });
  }

  const handleNoData = () => {
    setIsNoData(true);
  }

  const handleServerError = (): void => {
    setIsServerError(true);
  }

  useEffect(() => {
    fetchTargetDetails(id, handleTargetDetails, handleNoData, handleServerError)
  }, [id])

  if (isNoData) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <div style={{margin: '2em'}}>
      <Breadcrumb style={{marginBottom: '2em'}}>
        <Breadcrumb.Item href={AppRoute.Root}>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Donation target details</Breadcrumb.Item>
      </Breadcrumb>
      {
        !isServerError ?
          <>
            <h1 className="visually-hidden">{targetDetails.name}</h1>
            <Descriptions
              title={targetDetails.name}
              size='middle'
              bordered
              style={{marginBottom: '2em', width: 'fit-content'}}
              column={1}
            >
              <Descriptions.Item label="ID">{targetDetails.id}</Descriptions.Item>
              <Descriptions.Item label="Type">{targetDetails.type}</Descriptions.Item>
              <Descriptions.Item label="Payment code">{targetDetails.code}</Descriptions.Item>
            </Descriptions>
          </> : <p>Data loading error. Please try again later.</p>
      }
      <Link
        to={AppRoute.Root}
        style={{fontSize: '1.1em'}}
        data-testid='back-home'
      >Back home</Link>
    </div>
  )
}

export default TargetDetailsPage;
