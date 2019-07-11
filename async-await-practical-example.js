
const fetch = require('node-fetch');

console.log ( 'abc' );

var url = 'http://dummy.restapiexample.com/api/v1/employee/'


async function showAvatar() {

  let response = await fetch( url + 126);
  //execution wait for request to come back

  let user = await response.json();
  //execution wait for to convert 

  console.log ( user );
  //display value

  console.log ( 1111 );

  return user;

}

 showAvatar();

















// var fetch = require("node-fetch");


// console.log('Hello World!')

// async function getEmployeeData(id) {
//     await fetch('http://dummy.restapiexample.com/api/v1/employee/' + id)
//         .then((resolve) => get(resolve),
//             ((reject) => create(reject)))
// }

// function get(resolve) {
//     console.log('Lasttttttttt: ' + resolve);
// }

// function create(reject) {
//     console.log('cant find one : ' + reject + ': Please create one: ');
// }

// getEmployeeData();

