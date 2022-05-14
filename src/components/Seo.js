import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
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

const Seo = (props) => {
   const { site } = useStaticQuery(gqlQuery)
   const { title, description, imageUrl, siteUrl, twitterUsername } = site.siteMetadata

  return (
      <Helmet title={title} htmlAttributes={{ lang: 'en' }}>
          <meta name="image" content={imageUrl} />
          <meta name="description" content={description} />
          
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:title" content={title} />

           <meta name="twitter:card" content="summary_large_image" />
           <meta name="twitter:creator" content={twitterUsername} /> 
           <meta name="twitter:title" content={title} />
           <meta name="twitter:url" content={siteUrl} />
           <meta name="twitter:description" content={description} />
           <meta name="twitter:image" content={imageUrl} />
      </Helmet>
  )
}

//Note: If you use this in other pages then pass in props to make metadata dynamic
Seo.propTypes = {
  siteUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Seo
