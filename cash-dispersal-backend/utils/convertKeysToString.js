function convertNumericKeysToWords(obj) {
  console.log("into convertNumeric (): ", obj);
  const result = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const numericKey = parseInt(key);
      let wordKey;
      
      console.log("into convertNumeric (): key-", numericKey);
      switch (numericKey) {
        case 2:
          wordKey = 'TWO_DOLLARS';
          break;
        case 5:
          wordKey = 'FIVE_DOLLARS';
          break;
        case 10:
          wordKey = 'TEN_DOLLARS';
          break;
        case 20:
          wordKey = 'TWENTY_DOLLARS';
          break;
        case 50:
          wordKey = 'FIFTY_DOLLARS';
          break;
        case 100:
          wordKey = 'HUNDRED_DOLLARS';
          break;  
        // Add more cases for other numeric keys as needed
        default:
          // Use the original key if no conversion is defined
          wordKey = key;
      }
      
      result[wordKey] = obj[key];
    }
  }
  console.log("result: ", result)
  return result;
}

// Example usage
// const jsonObj = {"2": 5, "3": 10};
// const convertedObj = convertNumericKeysToWords(jsonObj);

// console.log(convertedObj);

module.exports= { convertNumericKeysToWords };