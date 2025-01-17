import axios from 'axios';
import { notification } from 'antd';
import { loadProgressBar } from 'axios-progress-bar';

import { BASE_URL } from '../constants/apiUrl';

loadProgressBar();

const http = (method, url, data, type) => {
  const token = localStorage.getItem('token');

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: `${BASE_URL}${url}`,
      data: data,
      headers: token ? {
        'Content-Type': type || 'application/json',
        'authorization': `Bearer ${token}`
      } : {
          'Content-Type': type || 'application/json',
        }
    })
      .then((result) => {
        console.log(result);
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
        if (error.response != null) {
          if (typeof error.response.data === 'object') {

            for (let key in error.response.data) {
              if (key === 'errors'){
                for (let subkey in error.response.data[key]){
                  for(let i=0; i < error.response.data[key][subkey].length; i++){
                     notification.error({
                    message: error.response.data[key][subkey][i]
                  })
                  }

                }
              }
              if (key !== 'messages') {
                if (typeof error.response.data[key] === 'string') {
                  notification.error({
                    // message: key,
                    // description: error.response.data[key][0],
                    message: error.response.data[key],
                  });
                } else {
                  if (typeof error.response.data[key][0] !== 'object') {
                    notification.error({
                      // message: key,
                      // description: error.response.data[key][0],
                      message: error.response.data[key][0],
                    });
                  }
                }

              }
            }
          } else {
            notification.error({
              message: 'Сервер не отвечает',
            });
          }
        }
      });
  })
};

export default http;