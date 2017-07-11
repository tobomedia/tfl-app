const export searchCyclePoints = (data,query) => {
    return new Promise(resolve, reject) {

        const result = data.body.filter((el) =>
            el.commonName.toLowerCase().indexOf('covent garden'.toLowerCase()) > -1
          )
          if (result.length) {
              resolve(result);
          } else {
              reject('Nothing found');
          }
      };
}
