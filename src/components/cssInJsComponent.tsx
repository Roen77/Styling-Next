import theme from "@/styles/theme";
import { menuList } from "@/utils/menu";
import Image from "next/image";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

function CSSInJs() {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const onClickDropMenu = () => {
    setShowDropMenu((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <a className="logo" href="#">
            Business Styled Components
          </a>
          <ul className="menu">
            {menuList.map((menu, i) => (
              <li key={i}>
                <a href="#">{menu}</a>
              </li>
            ))}
          </ul>
          <div>
            <button className="contact-button">CONTACT US</button>
            <button onClick={onClickDropMenu} className="mobile-button">
              <Image
                src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5c6eb8fd2f27af658094fa4a_menu-icon.png"
                alt="toggle button"
                width={22}
                height={18}
              />
            </button>
          </div>
          {showDropMenu && (
            <MobileMenu>
              {menuList.map((menu, i) => (
                <li key={i}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </MobileMenu>
          )}
        </Header>
        <MainContainer>
          <div className="banner">
            <Image
              fill
              sizes="100vw"
              src="https://fastly.picsum.photos/id/927/1000/400.jpg?hmac=OOWStXg293Wv5OthcN_wMmWhKQBO3UOx2yCkOrEdsPc"
              alt="banner"
              style={{ padding: "0 30px" }}
            />
          </div>
          <Contents>
            <Columns>
              <div className="left">
                <p>ABOUT</p>
                <h3>Two Col</h3>
                <div>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </div>
              </div>
              <div className="right image flex-center">
                <Image
                  src="https://fastly.picsum.photos/id/80/700/400.jpg?hmac=zyKxY2cGPjTUBYJ3Y0_3oNcSmGNT-ZikOXPr6UAbfHM"
                  width={700}
                  height={400}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="right image"
                />
              </div>
            </Columns>
            <Columns>
              <div>
                <h3>Three Col 1</h3>
                <div>
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their infancy.
                </div>
              </div>
              <div>
                <h3>Three Col 2</h3>
                <div>
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </div>
              </div>
              <div>
                <h3>Three Col 3</h3>
                <div>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here content here
                </div>
              </div>
            </Columns>
          </Contents>
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
}
export default CSSInJs;

const Container = styled.div`
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled.header`
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  position: relative;
  .logo {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    border-bottom-width: 4px;
    border-bottom-color: ${({ theme }) => theme.colors.black};
  }
  ul.menu {
    display: flex;
    color: ${({ theme }) => theme.colors.darkGrary};

    li:hover > a {
      opacity: 1;
    }
    li > a {
      padding: 20px;
      opacity: 0.6;
    }
  }

  .mobile-button {
    display: none;
  }
  .contact-button {
    padding: 12px 25px;
    background: ${({ theme }) => theme.colors.buttonBlack};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: ${({ theme }) => theme.letterSpacing.widest};
  }
  @media screen and (max-width: 990px) {
    ul.menu,
    .contact-button {
      display: none;
    }
    .mobile-button {
      display: block;
    }
  }
`;

const MobileMenu = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  top: 96px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
  }
  @media screen and (max-width: 990px) {
    display: block;
  }
`;

const MainContainer = styled.main`
  min-height: 100vh;
  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 40%;
  }
`;

const Contents = styled.div`
  min-width: 100%;
  padding: 1.875rem;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0;
  gap: 20px;
  > div {
    flex: 1;
  }

  h3 {
    font-weight: 700;
    padding: 1.25rem 0;
    font-size: 2.25rem;
  }
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;
