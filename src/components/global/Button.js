import React from "react"
import styled from "styled-components"

export default function Button({ text }) {
  return <ButtonHeader>{text}</ButtonHeader>
}

const ButtonHeader = styled.button`
  width: 275px;
  padding: 12px 0;
  margin: 40px auto 0;
  border: none;
  border-radius: 25px;
  background-color: #ff4e50;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  @media (min-width: 421px) {
    width: 225px;
  }
  @media (min-width: 992px) {
    border: 2px solid #ff4e50;
    transition: 0.2s;
    &:hover {
      color: #ff4e50;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`
const ButtonCard = styled(ButtonHeader)`
  width: 70px;
  padding: 4px 0;
  margin: 0 0 20px 0;
  font-size: 14px;
  text-transform: uppercase;
  @media (min-width: 421px) {
    width: 70px;
  }
  @media (min-width: 992px) {
    width: 70px;
  }
`
const PartnersButton = styled(ButtonHeader)`
  width: 280px;
  padding: 10px 0;
  border: 2px solid #ff4e50;
  color: #ff4e50;
  background: none;
  &:hover {
    background: #ff4e50;
    color: #ffffff;
  }
`
const ContactButton = styled(ButtonHeader)`
  width: 280px;
  margin: 0;
  padding: 8px;
`
export { ButtonCard, PartnersButton, ContactButton }
