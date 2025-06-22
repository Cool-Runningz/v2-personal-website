import React from 'react'
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'

const gqlQuery = graphql`
query SiteMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
        imageUrl
        twitterUsername
      }
    }
  }
`

const Head = (props) => {
   const { site } = useStaticQuery(gqlQuery)
   const { title, description, imageUrl, siteUrl, twitterUsername } = site.siteMetadata

 return  <>
     <html lang="en" />
      <title>{props.title || title}</title>
      <meta name="description" content={props.description || description} />
      <meta name="image" content={props.imageUrl || imageUrl} />

      <meta property="og:title" content={props.title || title} />
      <meta property="og:description" content={props.description || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.siteUrl || siteUrl} />
      <meta property="og:image" content={props.imageUrl || imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={props.title || title} />
      <meta name="twitter:url" content={props.siteUrl || siteUrl} />
      <meta name="twitter:description" content={props.description || description} />
      <meta name="twitter:image" content={props.imageUrl || imageUrl} />
    </>
}

//Note: If you use this in other pages then pass in props to make metadata dynamic
Head.propTypes = {
  siteUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Head
