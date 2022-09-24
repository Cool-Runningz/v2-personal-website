module.exports = {
  siteMetadata: {
    title: `Alyssa Holland | UI Developer`,
    siteUrl: "https://alyssaholland.com",
    description: `Personal Website for Alyssa Holland`,
    author: `Alyssa Holland`,
    github: `https://github.com/Cool-Runningz`,
    blog: `https://blog.alyssaholland.me`, // No trailing slash allowed!
    imageUrl: `/logo-square.png`, // Path to the image placed in the '/static' folder, in the project's root directory.
    twitterUsername: `@alyssa_codes`
  },
  plugins: [
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap", 
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp", 
  "gatsby-plugin-postcss", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-plausible`,
    options: {
      domain: `alyssaholland.com`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/favicon.png`
    },
  },

 ]
};