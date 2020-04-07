/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins:[
      {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {resolve: 'gatsby-plugin-antd', options:{style:true}},
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeCachingHeaders: false
      }
    },
    {resolve: 'gatsby-plugin-less', options:{
      javascriptEnabled:true,
      modifyVars:{
        "primary-color":"#44377a",
        "link-color":"#7265a8",
        "success-color":"#a3ff99",
        "warning-color":"#e8e677",
        "error-color":"#ef413e",
        "text-color":"#465164",
        "btn-primary-bg":"primary-color",
        "btn-primary-color":"#f4f8ff" 
      }
    }}
  ]
};
