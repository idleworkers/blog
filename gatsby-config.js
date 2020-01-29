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
