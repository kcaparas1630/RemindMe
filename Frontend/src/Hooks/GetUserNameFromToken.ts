const getUserFromToken = (): {token: string | null, userName: string} => {
  // get token from local storage
  const token = localStorage.getItem('loginToken');
  const userName: string = token ? JSON.parse(atob(token.split('.')[1])).sub : null;
  return {token, userName};
};

export default getUserFromToken;
