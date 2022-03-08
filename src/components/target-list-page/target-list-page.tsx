import { useEffect, useState } from 'react';
import { fetchTargetList } from '../../services/api-actions';
import TargetList from './components/target-list/target-list';
import { Target } from '../../types/target';
import { HomeOutlined } from '@ant-design/icons';

const initialTargetList: Target[] = [];

const TargetListPage = (): JSX.Element => {
  const [targetList, setTargetList] = useState(initialTargetList);
  const [isServerError, setIsServerError] = useState(false);
  const [isNoData, setIsNoData] = useState(false);

  const handleTargetList = (data: Target[]): void => {
    setTargetList(data);
  }

  const handleNoDataMessage = (): void => {
    setIsNoData(true);
  }

  const handleServerError = (): void => {
    setIsServerError(true);
  }

  useEffect(() => {
    fetchTargetList(handleTargetList, handleNoDataMessage, handleServerError);
  }, []);

  if (isNoData) {
    return (
      <div style={{margin: '2em'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1>Donation targets</h1>
          <HomeOutlined />
        </div>
        <p>No target data. Try again later.</p>
      </div>
    )
  }

  return (
    <div style={{margin: '2em'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Donation targets</h1>
        <HomeOutlined />
      </div>
      {isServerError ?
        <p>Data loading error. Please try again later.</p> :
        <TargetList targets={targetList} />
      }
    </div>)
}

export default TargetListPage;
