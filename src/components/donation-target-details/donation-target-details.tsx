import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchTargetDetails } from '../../services/api-actions';
import { AppRoute } from '../../const';
import { Target } from '../../types/target';
import { Breadcrumb, Table } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import NotFoundPage from '../not-found-page/not-found-page';

type TargetId = {
  id: string;
}

const DonationTargetDetails = (): JSX.Element => {
  const {id} = useParams<TargetId>();
  const [targetName, setTargetName] = useState('');
  const [targetDetails, setTargetDetails] = useState({
    id: '',
    type: '',
    code: ''
  });
  const [isNoData, setIsNoData] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleTargetDetails = (target: Target) => {
    setTargetDetails({
      id: String(target.giftTargetId),
      type: target.type,
      code: target.paymentCode,
    });
    setTargetName(target.name);
  }

  const handleNoData = () => {
    setIsNoData(true);
  }

  const handleServerError = (): void => {
    setServerError('Data loading error. Please try again later.');
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Payment code',
      dataIndex: 'code',
      key: 'code',
    }
  ]

  useEffect(() => {
    fetchTargetDetails(id, handleTargetDetails, handleNoData, handleServerError)
  }, [id])

  if (isNoData) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '2em'}}>
      <Breadcrumb style={{marginBottom: '2em'}}>
        <Breadcrumb.Item href={AppRoute.Root}>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Donation target details</Breadcrumb.Item>
      </Breadcrumb>
      {
        serverError === '' ?
          <>
            <h1>{targetName}</h1>
            <Table
              columns={columns}
              dataSource={[targetDetails]}
              rowKey='id'
              pagination={false}
              style={{marginBottom: '2em'}}
            />
          </> : <p>{serverError}</p>
      }
      <Link
        to={AppRoute.Root}
        style={{alignSelf: 'center', fontSize: '1.2em'}}
      >
        Back home
      </Link>
    </div>
  )
}

export default DonationTargetDetails;
