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
      <Link to="/">
        <img className="logo-image" src='/assets/logoOrange@3x.png' alt='logotype-deptek'></img>
      </Link>

        {/* <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div> */}
        <Navigation />
      </header>
      {children}

      <footer className="site-footer">

        <p>Deptek LLC, Address: 2655 Lejeune Road Suit 902 Coral Gables, FL 33134. Tel: <a href="tel:+17867908720">+1 (786)790-8720</a></p>
        <p>&copy; {new Date().getFullYear()} Deptek LLC &bull; WebDev by <a href="https://bercostudio.com">BercoStudio</a></p>
      </footer>
    </div>
  )
}
