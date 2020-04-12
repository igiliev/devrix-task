import axios from 'axios';
// import React from 'react';

//const BASE_URL = 'http://localhost/wordpress/wordpress/wp-json/wp/v2';

const GetTodos = () => {

axios.get('http://localhost/wordpress/wordpress/wp-json/wp/v2/posts')
  .then((response) => {
    console.log(response.data)
  });
  return null;
}
//   try {
    // await axios.get(`${BASE_URL}/posts`)
    // .then((response) =>  {
    //     console.log(response);
    // },(error) => {
    //     console.log(error)
    // })

    // const todos = [res.data];

    // console.log(todos);

    //console.log(`GET: Here's the list of todos`, todos);

    // return todos;
// };

export default GetTodos