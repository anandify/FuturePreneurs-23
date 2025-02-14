import React, {useEffect } from 'react';

function App() {
  const userInfo = {
    name: 'John Doe',
    registrationNumber: '123456789',
    email: 'johndoe@example.com',
    teamName: 'Team A',
  };

  const handleLeaveTeam = () => {
    alert('You have left the team.');
    //  fetch('http://localhost:3000/MemberDashboard/deleteTeam', {
    //     method: 'DELETE',
    //    headers: {
    //      'Content-Type': 'application/json',
    //    }
    //  }).then((res) => res.json())
    //    .then((data) => {
    //      console.log(data)
    // })
  };

//   const fetchDataFromBackend = () => {
    
//     fetch('http://localhost:3000/MemberDashboard/getTeamDetails', {
//       content: "application/json",
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${session.accessTokenBackend}`,
//         'Access-Control-Allow-Origin': '*',
//       },
//     }).then(res => res.json())
//     .then(data => {
//       console.log(data);
      
      
//     }).catch(err => {
//       console.log("no team found");
//       console.log(err)
//     })
    
//   };

  
//   useEffect(() => {
//     fetchDataFromBackend();
//   }, []);



  return (
    
<div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User Information</h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <div>
            <strong>Name:</strong> {userInfo.name}
          </div>
          <div>
            <strong>Registration Number:</strong> {userInfo.registrationNumber}
          </div>
          <div>
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div>
            <strong>Team Name:</strong> {userInfo.teamName}
          </div>
        </div>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <button onClick={handleLeaveTeam}>Leave Team</button>
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

  );
}

export default App;
