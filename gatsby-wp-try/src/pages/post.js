import React from 'react';
import { Link } from 'gatsby';
import './index.css';

const SinglePost = ({ location }) => {
    const regexPosts = /<p>|<\/p>|&#...../gm;
    const regexComments = /<p>|<\/p>|<br \/>|<a..+">|<\/a>/gm;
    
    return (
        <div className="post-container">
            <Link to='/'><button>Home</button></Link>
            <ul className="post-grid">
                { location.state.getPosts.filter(value => value.id === location.state.postId)
                .map(item => <li className="posts" key={item.id} >{item.content.rendered.replace(regexPosts, ' ')}</li>) }
                { location.state.getComments.filter(value => value.id === location.state.postId)
                .map(item => <li className="comments" key={item.id} >
                    <div className="comments-date">{ item.date }</div>
                    <div className="comments-img"><img src={ Object.entries(item.author_avatar_urls)[0].pop() } /></div>
                    <div className="comments-content">{ item.content.rendered.replace(regexComments, ' ') }</div>
                    <div className="comments-author-name">{ item.author_name }</div>
                </li>) }
            </ul>
        </div>
    )
}


export default SinglePost;