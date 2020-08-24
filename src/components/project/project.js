import PropTypes from "prop-types"
import React from "react"
import style from "./project.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ siteTitle, data }) => {
  if (!data.isVisible){
    return null
  }
    return (
      <div>
        <Link to={data.path}>
          <div className={style.project}>
              <Img  className={style.img} fluid={data.image.childImageSharp.fluid} />
              <div className={style.info}>
                  <span className={style.title}>{data.title}</span>
              </div>
          </div>
        </Link>
      </div>
    )
};

Project.propTypes = {
  siteTitle: PropTypes.string,
}

Project.defaultProps = {
  siteTitle: ``,
}

export default Project