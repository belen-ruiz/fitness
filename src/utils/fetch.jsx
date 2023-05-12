
const exerciseOp = {
    method: 'GET',
  };
  
  
  const fetch = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
  
    return data;
  }
  
  export { fetch }