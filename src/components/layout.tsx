/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import theme from "../utils/theme"
import { QSiteTitleQuery } from "../../types/graphql-types"
import Header from "./header"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  margin: 0 auto;
  margin-top: ${rhythm(3.5)};
  padding: ${rhythm(1)} 20px;
  max-width: 1100px;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const data: QSiteTitleQuery = useStaticQuery(graphql`
    query QSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header siteTitle={data!.site!.siteMetadata!.title!} />
        <Container>
          <main>{children}</main>
          <footer>
            Copyright © {new Date().getFullYear()}, All rights reserved
          </footer>
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

type LayoutProps = {
  children?: React.ReactNode
  location?: Location
}

export default Layout
