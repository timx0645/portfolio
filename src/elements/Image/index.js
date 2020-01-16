import React from './node_modules/react';
import ImageStyle from './style.index';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsbyastronaut.png"  }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <ImageStyle><Img fluid={data.placeholderImage.childImageSharp.fluid} /></ImageStyle>
}

export default Image; 
