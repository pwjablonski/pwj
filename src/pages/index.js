import React, {useState} from "react"

import Layout from "../components/layout"
import style from "./index.module.css"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IndexPage = ({location}) => {
  const [bubbles, setBubbles] = useState([]);

  function addBubble(e){
    const newBubble = [e.clientX, e.clientY];
    setBubbles([...bubbles, newBubble])
  }

  return (
    <Layout pathname={location.pathname}>
      <SEO title="Home" />
      <div className={style.content} onMouseDown={addBubble} role="presentation">
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
          {
            bubbles.map((bubble, i) =>{
              return (
                <svg 
                  key={i}
                  viewBox="0 0 30 30"
                  className={style.bubble}
                  style={{
                    left:`calc(${bubble[0]}px - .5rem)`,
                    top:`calc(${bubble[1]}px - .5rem)`
                  }}
                  fill={'#'+(Math.random()*0xFFFFFF<<0).toString(16)}
                >
                    <path d="M1,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
                </svg>
              )
            })
          }
      </div>
  
    </Layout>
  )
}

export default IndexPage
