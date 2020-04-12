import React from "react"
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from '../components/fetchWpApi';

export default () => {
  return (
    <section>
      <div className="jumbotron">
        <h3>Welcome to my task!</h3>
        <p>Browse through all the posts I have fetched from my WordPress backend</p>
      </div>
      <App></App>
    </section>
  )
}



