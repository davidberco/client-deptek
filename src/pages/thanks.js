import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

const thanks = () => {
  return (
    <Layout>
      <Helmet>
        <title>Thanks</title>
      </Helmet>
      <div style={{textAlign: "center", padding:"5vh 0", lineHeight: "1.5"}}>
     
        <p>Thanks for your message. we will be in contact as soon as possible. </p>
        <p>Click <Link to="/">here</Link> to return to the home page.</p>
      </div>
    </Layout>
  )
}

export default thanks