import http from 'superagent-bluebird-promise';


export default function performRequest(request, context) {
  return new Promise((resolve, reject) => {
        http.get(request).then((response) => {
            resolve(response);
        }, (error) => {
            reject(error);
        });
    });
};
