import axios from 'axios';
import { Target } from '../types/target';

export const BACKEND_URL = 'https://test.tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets'
export const REQUEST_TIMEOUT = 5000

export const fetchTargetList = (handleTargetList: (props: Target[]) => void, handleIsNoData: () => void, handleIsServerError: () => void) => {
  axios({
    method: 'get',
    url: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  })
    .then((response) => {
      const data = response.data.giftTargets;

      if (data.length === 0) {
        handleIsNoData();
      } else {
        handleTargetList(data)
      }
    })
    .catch(handleIsServerError);
}


