import React, { Component } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';

class App extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            savePosts: [],
            saveComments: [],
            hasLoaded: false,
        }
    }

    componentDidMount() {
        const postsUrl = "http://localhost/wordpress/wordpress/wp-json/wp/v2/posts";
        const commentsUrl = "http://localhost/wordpress/wordpress/wp-json/wp/v2/comments";
        const requesPosts = axios.get(postsUrl);
        const requesCommets = axios.get(commentsUrl);
        axios.all([requesPosts, requesCommets]).then(axios.spread((...responses) => {
            const savePosts = responses[0].data;
            const saveComments = responses[1].data; 
            this.setState({savePosts, saveComments, hasLoaded: true})
        })).catch(errors => {
            console.log(errors);
          })
    }

    render() {
        const { savePosts, saveComments, hasLoaded } = this.state;
        const regex = /<p>|<\/p>|&#...../gm;
        console.log(saveComments);
        return (
            <> 
                {
                    hasLoaded ? (
                        <ul className="row">
                            { savePosts.map(value =>
                            <li className="card mb-4 box-shadow" key={ value.id }>
                                <Link className="btn btn-info" to={`/post`} state={{ postId: value.id, getPosts: savePosts, getComments: saveComments }} >{ value.title.rendered.replace(regex, ' ') }</Link>
                            </li>) }
                        </ul>
                    ) : 'Loading...'
                }
            </>
        )
    }
}

export default App;