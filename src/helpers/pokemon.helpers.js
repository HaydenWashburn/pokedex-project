export function getListOf(list, prop) {
    return list.reduce((uniqueValue, item) => {
      if (uniqueValue.indexOf(item[prop]) === -1) {
        uniqueValue.push(item[prop]);
      }
      return uniqueValue;
    }, []);
  }