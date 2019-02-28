import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo.jpg"

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <h3 className="col-sm-12 col-md-3">dreamshare</h3>
          <div className="company col-sm-12 col-md-3">
            <h4>company</h4>
            <ul>
              <li>abouts</li>
              <li>contacts</li>
              <li>press</li>
              <li>blog</li>
            </ul>
          </div>
          <h4 className="col-sm-12 col-md-3">partners</h4>
          <div className="col-sm-12 col-md-3 author">
            <h5>designet by</h5>
            <img src={Logo} alt="logo-author" />
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  border-top: 4px solid #ff4e50;
  padding-top: 20px;
  padding-bottom: 20px;

  h3 {
    padding-bottom: 15px;
    font-size: 20px;
    color: #ff4e50;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }
  h4 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    color: #333333;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
  }

  .company {
    text-align: center;

    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding-bottom: 5px;
      color: #666666;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
      text-transform: capitalize;
      cursor: pointer;
      li {
        margin: 0 10px;
      }
    }
  }

  .author {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    h5 {
      color: #cccccc;
      font-size: 15px;
      text-transform: uppercase;
    }
  }

  @media (min-width: 768px) {
    padding-top: 40px;
    h3 {
      text-align: left;
    }
    h4 {
      text-align: left;
    }
    .company {
      text-align: left;
      ul {
        flex-direction: column;
        li {
          margin: 0;
        }
      }
    }

    .author {
      padding: 0;
      align-items: flex-end;
    }
  }
`
