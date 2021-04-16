module.exports = {
  siteMetadata: {
    title: "Hackaton BCP",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-rest-api',
        options: {
          endpoints: [
            'https://jsonplaceholder.typicode.com/posts',
            'https://jsonplaceholder.typicode.com/users',
          ],
        },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
