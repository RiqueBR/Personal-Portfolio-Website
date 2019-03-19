import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const IndexPage = ({data}) => {

  // const siteTitle = data.site.siteMetadata.title;
  // const metaDescr = data.site.siteMetadata.description;
  return (
    <h1>something</h1>
  )

}

export default IndexPage

export const query = graphql`
  query allImgsQuery {
    site{
      siteMetadata{
        title
        description
      }
    }

    coverImg: imageSharp(id: {regex: "/background-photo/"}){
      sizes(maxWidth: 1200){
        ...GatsbyImageSharpSizes
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/assets/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;