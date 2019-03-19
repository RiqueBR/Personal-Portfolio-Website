import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Cover from "../components/cover"

const IndexPage = ({data}) => {
  
  const siteTitle = data.site.siteMetadata.title;
  const metaDescr = data.site.siteMetadata.description;
  const { egdes: projectImgData } = data.projectImgs

  return (
    <div>
      
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescr}/>
        {/* Add Favicon here */}
      </Helmet>
      <Cover coverImg={data.coverImg} />
    </div>
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

    coverImg: imageSharp(original: { src: { regex: "/bckPhoto/" } }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }

    projectImgs: allFile(
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