import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as style from "./projectTemplate.module.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <div className={style.container}>
          <h1>{frontmatter.title}</h1> 
          <p className={style.links}>
            <a className={style.link} href={frontmatter.livelink} target="_blank" rel="noopener noreferrer">live site</a>
            <span className={style.divide}>|</span>
            <a className={style.link} href={frontmatter.codelink} target="_blank" rel="noopener noreferrer">source</a>
          </p>
          <div className={style.content}>
            <p>{frontmatter.date}</p>
            <div
              // className={style.text}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div> 
          <div>
            <Link className={style.link} to="/">back</Link>
          </div>
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($projectPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $projectPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        livelink
        codelink
      }
    }
  }`
