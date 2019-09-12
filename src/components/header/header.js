import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle, pathname }) => {
  console.log(pathname)
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link className={
          pathname === '/' ? styles.linkActive : styles.link
        } to="/">me</Link>
        <Link className={
          pathname === '/projects/' || pathname.startsWith('/projects/') ? styles.linkActive : styles.link
        } to="/projects/">projects</Link>
      </div>
    </header>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header