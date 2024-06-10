import React from 'react';
const bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTgwMTkzMzksInVzZXJuYW1lIjoic3dhdGltaXNocmEwMjQ3QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidGVzdCJ9.tL2tezOgUqnY6Q41JRtVwgDjnK3Ik65q8Gkich0qYvE"

const URL={
    "reg":'http://localhost:3030/users/{user_id}/login',
    "login":'http://localhost:3030/signup'
}

function Home(){
        // 'Authentication'=`BEARER ${bearer_token}`;

    return(
        <div>
            <h1>Home Page</h1>
            if (path=URL[reg])  <p>Please sign up.</p>;
            if (path=URL[login])  <p>You are logged in.</p>;
        </div>
    )
}
export default Home;