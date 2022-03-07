import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export type Target = {
  giftTargetId: number,
  name: string,
  type: string,
  paymentCode: string,
};

const TargetListPage = (props: Target[]): JSX.Element => (
  <div>
    <h1>Donation targets</h1>
    <ul>
      {
        props.map((target: Target): JSX.Element => {
          const key = target.giftTargetId;

          return (
            <li key={key}>
              <Link to={`${AppRoute.Target}/${key}`}>
                target.name
              </Link>
            </li>)
        })
      }
    </ul>
  </div>
)

export default TargetListPage;
