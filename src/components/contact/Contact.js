import React from "react"
import styled from "styled-components"
import Title from "../global/Title"
import { ContactButton } from "../global/Button"

export default function Contact() {
  return (
    <ContactWrapper>
      <div className="container">
        <Title title="Discover holiday activity ideas" />
        <h4>Hi! What are your holiday interests?</h4>
        <div className="form">
          <input type="text" placeholder="Enter your interests" />
          <ContactButton>Search partners</ContactButton>
        </div>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #333333;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      height: 40px;
      width: 280px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #999999;
      &::placeholder {
        color: #999999;
        padding-left: 10px;
        font-family: "Roboto", sans-serif;
      }
    }
  }

  @media (min-width: 720px) {
    margin-bottom: 100px;
    h4 {
      font-size: 35px;
    }
  }

  margin-top: 40px;
  @media (min-width: 992px) {
    margin-top: 100px;
    .form {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      input {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
  }
`
