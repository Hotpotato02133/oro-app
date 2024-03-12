import axios from "axios";
// import {MyServerHostJava}  from './MyFunctions';
const dbServerHost = "https://techsit.orobusinessgroup.online/site102"; // MyServerHostJava()
                     

// export function GetAPITokenJavaNotworking() {
//   const requestOptions = {
//     method: 'POST',
//     // headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username: "Chris", password: "speed2" })
// };
// fetch('https://techsit.orobusinessgroup.online/site101/authenticate', requestOptions)
//     .then(response => response.json())
//     // .then(response => alert(response.data))
//     .then(data => alert(data.status));
    
// }

export function GetAPITokenJava() {
  // axios.post('https://techsit.orobusinessgroup.online/site102/authenticate', {
  //  alert (dbServerHost);
  axios.post( dbServerHost + "/authenticate", {
 // Data to be sent to the server
  username: 'Gerard',
  password: 'password',
//  username: 'Chris',
//  password: 'speed2',
})
.then(response => {
  // alert ("Token Access Java1: " + response.data);
  let txtData= response.data;
  
 // sessionStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHZXJhcmQiLCJpYXQiOjE2ODM2NzYxNzEsImV4cCI6MTY4MzcxOTM3MX0.sYR7szeQ7nu4q4Tc5Dh1lpxypFM7Ai45Ts832UQHaD0");
  sessionStorage.setItem("accessToken",txtData);
  // console.log('get token:', txtData);
//  let text= sessionStorage.getItem("accessToken");
    // alert ("Token Access Java2: " + txtData);
  return txtData ;
})
.catch(function (error) {
    console.error(error);
    alert ("Token/API Server Error: ", error)
    return false 
});
 
}


export function GetMyHeaders (tAccessToken) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${tAccessToken}`);
  return myHeaders

}