module.exports = {
  siteMetadata: {
    title: 'Rami Shahatit',
    siteUrl: 'http://ramishahatit.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Signika`,
          `source sans pro\:300,400,600` // you can also specify font weights and styles
        ]
      }
    },
  ],
}
