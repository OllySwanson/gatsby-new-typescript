import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { activeStyle } from "../utils/theme"

import logo from "../images/gatsby-icon.png"

interface WrapperProps {
  readonly atTop: boolean
}

const HeaderWrapper = styled.header<WrapperProps>`
  background: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: box-shadow 0.3s ease-out;
  height: ${rhythm(2.5)};
  display: flex;
  box-shadow: ${props =>
    props.atTop ? "none" : "0px 3px 10px rgba(22, 2, 3, 0.08)"};
  z-index: 1;
`

const HeaderContainer = styled.div`
  margin: auto auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  img {
    margin-bottom: 0;
    height: 50px;
    width: auto;
    object-fit: contain;
  }
`

const StyledLink = styled(Link)`
  display: flex;
`

const StyledNav = styled.nav`
  display: flex;
  a {
    text-decoration: none;
    margin-left: ${rhythm(1)};
    color: ${props => props.theme.colors.gray};
    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`

const Header: React.FC<HeaderProps> = () => {
  const [atTop, setAtTop] = React.useState(true)
  //need to use reference to avoid stale closure for the event listener
  const atTopRef = React.useRef(true)

  const headContainerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const sticky = headContainerRef.current?.offsetTop
    const scrollCallBack = () => {
      if (atTopRef.current && window.pageYOffset > Number(sticky)) {
        atTopRef.current = false
        setAtTop(false)
      } else if (!atTopRef.current && window.pageYOffset <= Number(sticky)) {
        atTopRef.current = true
        setAtTop(true)
      }
    }

    window.addEventListener("scroll", scrollCallBack)

    return () => {
      window.removeEventListener("scroll", scrollCallBack)
    }
  }, [])

  return (
    <HeaderWrapper atTop={atTop}>
      <HeaderContainer ref={headContainerRef}>
        <div>
          <StyledLink to="/">
            <img src={logo} alt="Logo" />
          </StyledLink>
        </div>
        
      </HeaderContainer>
    </HeaderWrapper>
  )
}
type HeaderProps = {
  siteTitle: string
}

export default Header
