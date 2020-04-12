import React from "react"
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Fetcher from '../components/fetchWpApi';

export default () => {
  return (
    <section>
      <div className="jumbotron">
        <h3>Welcome to my task!</h3>
        <p>Browse through all the posts I have fetched from my WordPress backend</p>
      </div>
      <Fetcher></Fetcher>
    </section>
  )
}



