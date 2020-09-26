module.exports = {
  siteMetadata: {
    title: `Alyssa Holland Website`,
    description: `Personal Website for Alyssa Holland`,
    author: `Alyssa Holland`,
    github: `https://github.com/Cool-Runningz`,
    blog: `https://blog.alyssaholland.me/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "HASHNODE",
        // This is the field under which it's accessible
        fieldName: "hashnode",
        // URL to query from
        url: "https://api.hashnode.com/",
      },
    }
  ]
};
