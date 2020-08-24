import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import scrollTo from 'gatsby-plugin-smoothscroll';


const Header = ({ siteTitle, pathname }) => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <span className={
          pathname === '/' ? styles.linkActive : styles.link
        } onClick={() => scrollTo('#intro')}>me</span>
        <a href="#projects" className={
          pathname === '/projects/' || pathname.startsWith('/projects/') ? styles.linkActive : styles.link
        } onClick={() => {  
          scrollTo('#projects')
        }} >projects</a>
      </div>
    </header>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
  pathname: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  pathname: ``
}

export default Header