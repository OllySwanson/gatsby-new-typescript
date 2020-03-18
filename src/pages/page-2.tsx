import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type SecondPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const SecondPage: React.FC<SecondPageProps> = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
