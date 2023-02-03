import PropTypes from "prop-types"
import React from "react"
import * as style from "./project.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Project = ({ siteTitle, data }) => {
  const image = getImage(data.image)

  if (!data.isVisible){
    return null
  }
    return (
      <div>
        <Link to={data.path}>
          <div className={style.project}>
              <GatsbyImage  className={style.img} image={image} />
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