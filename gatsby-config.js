module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Idle Workers Blog`,
    author: `Mohamed Hayibor`,
    description: `Trials, insights and solutions working with decentralized technologies`,
    siteUrl: "https://idleworkers.com/blog",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/chiangmaidapps`,
      },
    ],
  },
}
