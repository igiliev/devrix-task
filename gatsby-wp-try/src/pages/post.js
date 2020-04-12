import React from 'react';
import { Link } from 'gatsby';

const SinglePost = ({ location }) => {
    const regex = /<p>|<\/p>|&#...../gm;
    return (
        <div>
            <Link to='/'><button>Home</button></Link>
            <ul>
                { location.state.getPosts.filter(value => value.id === location.state.postId)
                .map(item => <li key={item.id} >{item.content.rendered.replace(regex, ' ')}</li>) }
                { location.state.getComments.filter(value => value.id === location.state.postId)
                .map(item => <li key={item.id} >{item.content.rendered.replace(regex, ' ')}</li>) }
            </ul>
        </div>
    )
}


export default SinglePost;