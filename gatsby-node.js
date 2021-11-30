/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const redirection = [
    { from: '/business-survival-pack/', to: '/' },
    { from: '/expertsinbusiness/', to: '/' },
    { from: '/faqs.php', to: '/' },
    { from: '/insights/3-essential-actions-take-temporary-safe-harbour-ends-31-december-2020/', to: '/' },
    { from: '/insights/accountant-advice/', to: '/' },
    { from: '/insights/business-debt-management/page/2/', to: '/' },
    { from: '/insights/business-restructure/', to: '/' },
    { from: '/insights/business-restructure/page/2/', to: '/' },
    { from: '/insights/case-studies/', to: '/' },
    { from: '/insights/latest-news-mackay-goodwin-announces-new-advisory-department/', to: '/' },
    { from: '/insights/page/2/', to: '/' },
    { from: '/insights/page/3/', to: '/' },
    { from: '/insights/page/4/', to: '/' },
    { from: '/insights/page/5/', to: '/' },
    { from: '/insights/page/6/', to: '/' },
    { from: '/insights/page/7/', to: '/' },
    { from: '/insights/voluntary-administration/page/2/', to: '/' },
    { from: '/insights/voluntary-administration/page/3/', to: '/' },
    { from: '/terms.html', to: '/' },
    { from: '/privacy.html', to: '/' },
    { from: '/insights/liquidation/', to: '/' },
    { from: '/insights/business-debt-management/', to: '/' },
    { from: '/10-signs-your-business-needs-a-corporate-advisor/', to: '/' },
    { from: '/10-signs-your-business-needs-to-be-restructured/', to: '/' },
    { from: '/10-steps-to-getting-your-business-out-of-debt/', to: '/' },
    { from: '/5-reasons-to-consider-voluntary-administration/', to: '/' },
    { from: '/5-signs-your-business-is-in-financial-trouble/', to: '/' },
    { from: '/9-tips-for-managing-business-tax-debt/', to: '/' },
    { from: '/a-guide-to-business-insolvency/', to: '/' },
    { from: '/the-accountants-guide-to-working-with-a-voluntary-administrator/', to: '/' },
    { from: '/how-to-avoid-company-bankruptcy-or-liquidation/', to: '/' },
    { from: '/the-benefits-of-debt-financing-for-your-business/', to: '/' },
    { from: '/building-developer/', to: '/' },
    { from: '/debt-management-tips-for-company-directors/', to: '/' },
    { from: '/how-to-conduct-a-successful-business-restructure/', to: '/' },
    { from: '/earth-moving-company/', to: '/' },
    { from: '/what-is-business-liquidation/', to: '/' },
    { from: '/why-you-need-a-budget-for-your-business/', to: '/' },
    { from: '/the-accountants-guide-to-working-with-a-voluntary-administrator', to: '/' },
    { from: '/10-steps-to-getting-your-business-out-of-debt', to: '/' },
    { from: '/building-developer', to: '/' },
    { from: '/debt-management-tips-for-company-directors', to: '/' },
    { from: '/why-you-need-a-budget-for-your-business', to: '/' }
  ]

  redirection.forEach(post => {
    console.log(post);
    createRedirect({ fromPath: post.from, toPath: post.to, isPermanent: true })
  })

  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
      allWpArticle: { nodes: allWpArticle },
      allWpBusiness: { nodes: allWpBusiness },
      allWpEvent: { nodes: allWpEvent },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
        }
      }
      allWpArticle {
        nodes {
          id
          slug
        }
      }
      allWpBusiness {
        nodes {
          id
          slug
        }
      }
      allWpEvent {
        nodes {
          id
          slug
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })

  allWpArticle.forEach(post => {
    createPage({
      // will be the url for the page
      path: "insights/" + post.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })

  allWpBusiness.forEach(post => {
    createPage({
      // will be the url for the page
      path: "insights/" + post.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })

  allWpEvent.forEach(post => {
    console.log(post.slug);
    createPage({
      // will be the url for the page
      path: "insights/" + post.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })
}