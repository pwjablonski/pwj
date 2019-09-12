import React from "react"

import Layout from "../components/layout"
import style from "./index.module.css"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IndexPage = ({location}) => {
  console.log(location);
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Home" />
      <div className={style.content}>
          <h1>hi! i'm peter, welcome to my site</h1>
          <p>i am a programmer, educator and amateur crossword solver</p>
          <div className={style.icons}>
            <a href="mailto:pwjablonski@gmail.com">
              <FontAwesomeIcon className={style.icon} icon={faPaperPlane} />
            </a>
            <a href="https://www.linkedin.com/in/pwjablonski/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
            </a>
            <a href="https://github.com/pwjablonski" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={style.icon} icon={faGithub} />
            </a>
            <a href="https://codepen.io/pjablonski/pens/public" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={style.icon} icon={faCodepen} />
            </a>
          </div>
      </div>
  
    </Layout>
  )
}

export default IndexPage
