import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import style from "./projectTemplate.module.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <div className={style.container}>
          <h1>{frontmatter.title}</h1> 
          <p className={style.links}>
            <a className={style.link} href={frontmatter.livelink}>live site</a>
            <span> | </span>
            <a className={style.link} href={frontmatter.codelink}>source</a>
          </p>
          <div className={style.content}>
            <p>{frontmatter.date}</p>
            <div
              // className={style.text}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div> 
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
