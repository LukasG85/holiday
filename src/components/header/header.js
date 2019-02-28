import React from "react"
import styled from "styled-components"
import HeaderImg from "../../images/headerImg.jpg"
import Button from "../global/Button"

const Header = () => (
  <HeaderWrapper>
    <div className="container header-container">
      <div className="row">
        <div className="col logo">
          <h3>dreamshare</h3>
          <div className="login">
            <button className="login-btn log-in">Log in</button>
            <button className="login-btn sign-up">Sign up</button>
          </div>
        </div>
      </div>

      <h1>
        share your <span>holiday dreams</span>
      </h1>
      <h6>And find the perfect partner to fullfill it</h6>
      <Button text="Find your holiday partner" />
    </div>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${HeaderImg});
  background-size: cover;
  background-position: center;

  .header-container {
    display: flex;
    flex-direction: column;

    .logo {
      height: 200px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
      h3 {
        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 45px;
      }
      .login-btn {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        background: none;
        border: none;
        cursor: pointer;
        &.log-in {
          margin-right: 20px;
        }
        &.sign-up {
          padding: 10px 20px;
          border: 2px solid white;
          border-radius: 25px;
        }
      }
    }

    h1 {
      font-size: 30px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      text-align: center;
      line-height: 130%;
      span {
        display: block;
      }
    }

    h6 {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 40px;
    }
  }

  @media (min-width: 421px) {
    .header-container {
      .logo {
        flex-direction: row;
        align-items: flex-start;
      }
      h6 {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 760px) {
    height: 700px;
    .header-container {
      h1 {
        font-size: 52px;
      }
      .login-btn {
        &.log-in,
        &.sign-up {
          transition: 0.2s;
        }

        &.log-in:hover {
          color: #ff4e50;
        }
        &.sign-up:hover {
          border: 2px solid #ff4e50;
          color: #ff4e50;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`
