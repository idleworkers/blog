module.exports = {
  plugins: [
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Idle Workers Research and Development blog`,
        short_name: `IdleWorkers`,
        start_url: `/`,
        font_size: `40px`,
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Idle Workers Blog`,
    author: `Mohamed Hayibor`,
    description: `Trials, insights and solutions working with decentralized technologies to provide solutions to the idle workers problem.`,
    siteUrl: "https://blog.idleworkers.com/",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/idle_workers`,
      },
      {
        name: `github`,
        url: `https://github.com/idleworkers`,
      },
    ],
  },
}
