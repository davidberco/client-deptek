import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
      <img className="logo-image" src='/assets/logoOrange@3x.png' alt='logotype-deptek'></img>

        {/* <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div> */}
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>Deptek LLC, information related to the company, telephone number, email, or something pending ask to Juan Ivan</p>
        <p>&copy; {new Date().getFullYear()} Deptek LLC &bull; WebDev by <a href="https://bercostudio.com">BercoStudio</a></p>
      </footer>
    </div>
  )
}
