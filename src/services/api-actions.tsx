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

export const fetchTargetDetails = (
  targetId: string | undefined,
  handleTargetDetails: (props: Target) => void,
  handleIsNoData: () => void,
  handleServerError: () => void) => {
    axios({
      method: 'get',
      url: `${BACKEND_URL}/${targetId}`,
      timeout: REQUEST_TIMEOUT,
    })
      .then((response) => {
        if (response.data.giftTargets.length === 0) {
          handleIsNoData();
        } else {
          const data = response.data.giftTargets[0];
          handleTargetDetails(data);
        }
      })
      .catch(handleServerError);
}
