import React from "react"
import styled from "styled-components"
import { ButtonCard } from "../global/Button"

export default function Card(props) {
  const { title, text, image, step } = props.info
  return (
    <CardWrapper image={image} className="col-sm-12 col-md-4">
      <ButtonCard>{step}</ButtonCard>
      <h4>{title}</h4>
      <p>{text}</p>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 240px;
  background: ${props =>
    `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${
      props.image
    })`};
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  border-radius: 10px;
  h4 {
    width: 60%;
    margin-bottom: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    color: #fff;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #cccccc;
  }
  @media (min-width: 421px) {
    height: 400px;
    max-width: 235px;
    margin: 10px 10px;
    h4 {
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    max-width: 300px;
  }
`
