import React from "react"

import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import style from "./index.module.css"
import SEO from "../components/seo"
import Project from '../components/project/project'
import scrollTo from 'gatsby-plugin-smoothscroll';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IndexPage = ({location, data}) => {
  const projects = data.allMarkdownRemark.edges; 

  return (
    <Layout pathname={location.pathname}>
      <SEO title="Home" />
      <section className={style.page} id="intro">
        <div className={style.intro}>
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
            <Link to="resume">
              <FontAwesomeIcon className={style.icon} icon={faFileAlt} />
            </Link>
          </div>
          <FontAwesomeIcon className={style.chevron} icon={faChevronDown} onClick={() => scrollTo('#projects')}/>
        </div>
      </section>
      <section className={style.page} id="projects">
        <h1 className={style.page_title}>projects</h1>
        <div className={style.projects}>
        {
          projects.map((project) => {
            return <Project data={project.node.frontmatter} key={project.node.frontmatter.title} />;
          })
        }
        </div>
      </section>
  
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            date
            title
            isVisible
            image {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`