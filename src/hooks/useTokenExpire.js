import jwt_decode from "jwt-decode";
const isTokenExpired = (token) => {
  const decodedToken = jwt_decode(token);
  const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
  return decodedToken.exp < currentTime;
};
export default isTokenExpired