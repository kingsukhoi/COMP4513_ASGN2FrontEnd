exports.createPages = ({ actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/`,
      toPath: `/app/login`,
      redirectInBrowser: true,
      isPermanent: true,
    })

    createRedirect({
      fromPath: `/app`,
      toPath: `/app/login`,
      redirectInBrowser: true,
      isPermanent: true,
    })
  }