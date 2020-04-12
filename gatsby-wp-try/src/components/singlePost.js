import React from 'react';
// { useState, useEffect } 

// class SinglePost extends Component {
//     state = {
//         getPosts: [],
//         hasLoaded: false
//     }

//     componentDidMount() {
//         const { handle } = this.props.match.params;
//         fetch(`http://localhost/wordpress/wordpress/wp-json/wp/v2/posts/${handle}`)
//         .then(res => res.json())
//         .then(data => this.setState({getPosts: data}))
//     }

//     render() {
//         return (
//             <div>
//                 <h2>This is the single post page</h2>
//             </div>
//         )
//     }
// }


const SinglePost = ( {match} ) => {
    // const [ data, setData ] = useState([]);
    const postId = match.params.id;
    console.log(match)

    // useEffect(() => {
    //     fetch(`http://localhost/wordpress/wordpress/wp-json/wp/v2/posts/${postId}`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // })

    return (
        <div>
            {/* <p>{ props.name }</p> */}
            <p>{ postId }</p>
            <ul>
                {/* { props.data.map(value => <li key={value.id}>{ value.content.rendered }</li>) } */}
                {/* { props.data.filter(value => value.id === props.clickedId).map(item => <li>{item.content.rendered}</li>) } */}
            </ul>
        </div>
    )
        // fetch(`http://localhost/wordpress/wordpress/wp-json/wp/v2/posts/${handle}`)
        // .then(res => res.json())
        // .then(data => this.setState({getPosts: data}))
        // .catch(error => hasError = true)
}


export default SinglePost;