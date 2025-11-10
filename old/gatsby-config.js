/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Alli Mariam Portfolio`,
    siteUrl: `https://alli-mariam-portfolio.vercel.app/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    'gatsby-plugin-postcss',
  ],
}
