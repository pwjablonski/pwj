import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle, pathname }) => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link className={
          pathname === '/' ? styles.linkActive : styles.link
        } to="/">me</Link>
        <Link className={
          pathname === '/projects/' || pathname.startsWith('/projects/') ? styles.linkActive : styles.link
        } to="/projects/">projects</Link>
        <Link className={
          pathname === '/resume' ? styles.linkActive : styles.link
        } to="/resume">resume</Link>
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