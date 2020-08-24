import React from "react"
import styles from "./footer.module.css"
import Tree from "../tree/tree"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Tree />
    </footer>
  )
}

export default Footer