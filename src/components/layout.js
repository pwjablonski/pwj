/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header/header"
// import Footer from "./footer/footer"

import "./layout.css"

const Layout = ({ children, pathname }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [bubbles, setBubbles] = useState([]);

  function addBubble(e){
    const newBubble = [e.pageX, e.pageY];
    setBubbles([...bubbles, newBubble])
  }

  return (
    <>
      {/* <Header pathname={pathname} siteTitle={data.site.siteMetadata.title} /> */}
      <main onMouseDown={addBubble} role="presentation">{children}</main>
      {/* <Footer /> */}
      {/* {
        bubbles.map((bubble, i) =>{
          return (
            <svg 
              key={i}
              viewBox="0 0 30 30"
              className="bubble"
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
      } */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
