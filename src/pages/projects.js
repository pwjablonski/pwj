import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./projects.module.css"
import Project from '../components/project/project'


const Projects = ({data, location}) => {
  const projects = data.allMarkdownRemark.edges; 
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Projects" />
      <div className={style.content}>
        {
          projects.map((project) => {
            return <Project data={project.node.frontmatter} key={project.node.frontmatter.title} />;
          })
        }
      </div>
    </Layout>
  )
}

export default Projects

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
