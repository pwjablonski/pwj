import React from "react"

import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import * as style from "./index.module.css"
import Seo from "../components/seo"
import Project from '../components/project/project'
import scrollTo from 'gatsby-plugin-smoothscroll';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IndexPage = ({location, data}) => {
  const projects = data.allMarkdownRemark.edges; 
  console.log(projects)

  return (
    <Layout pathname={location.pathname}>
      <Seo title="Home" />
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
        </div>
        <div className={style.chevron}>
          <FontAwesomeIcon  icon={faChevronDown} onClick={() => scrollTo('#freelance')}/>
        </div>
      </section>
      <section className={style.page} id="freelance">
        <div className={style.projects}>
          <h1 className={style.page_title}>Freelance</h1>
          <div className={style.projects_grid}>
          {
            projects.map((project) => {
              return project.node.frontmatter.category === "Freelance" && <Project data={project.node.frontmatter} key={project.node.frontmatter.title} />;
            })
          }
          </div>
        </div>
        <div className={style.chevron}>
          <FontAwesomeIcon className={style.chevron} icon={faChevronDown} onClick={() => scrollTo('#open-source')}/>
        </div>
      </section>
      <section className={style.page} id="open-source">
        <div className={style.projects}>
          <h1 className={style.page_title}>Open Source</h1>
          <div className={style.projects_grid}>
          {
            projects.map((project) => {
              return project.node.frontmatter.category === "Open Source" && <Project data={project.node.frontmatter} key={project.node.frontmatter.title} />;
            })
          }
          </div>
        </div>
        <div className={style.chevron}>
          <FontAwesomeIcon className={style.chevron} icon={faChevronDown} onClick={() => scrollTo('#personal')}/>
        </div>
      </section>
      <section className={style.page} id="personal">
        <div className={style.projects}>
          <h1 className={style.page_title}>Personal Projects</h1>
          <div className={style.projects_grid}>
          {
            projects.map((project) => {
              return project.node.frontmatter.category === "Personal" && <Project data={project.node.frontmatter} key={project.node.frontmatter.title} />;
            })
          }
          </div>
        </div>
        <div className={style.chevron}>
          <FontAwesomeIcon className={style.chevron} icon={faChevronUp} onClick={() => scrollTo('#intro')}/>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            date
            title
            isVisible
            category
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`