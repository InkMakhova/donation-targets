import { Target } from '../../../../types/target';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { Table } from 'antd';

type TargetListProps = {
  targets: Target[];
}

const TargetList = ({targets}: TargetListProps): JSX.Element => {
  const columns = [
    {
      title: '#',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }]

  const data = targets.map((target, index) => {
    const {giftTargetId, name} = target;
    const key = index+1;
     return {
       number: key,
       id: giftTargetId,
       name: <Link to={`${AppRoute.Targets}/${target.giftTargetId}`}>{name}</Link>,
     }
  });

  return (<Table columns={columns} dataSource={data} rowKey='id'/>)
}

export default TargetList;
