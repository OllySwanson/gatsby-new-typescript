import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type NotFoundPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
