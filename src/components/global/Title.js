import React from "react"
import styled from "styled-components"

export default function Title({ title }) {
  return <TitleWrapper>{title}</TitleWrapper>
}

const TitleWrapper = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333333;
  @media (min-width: 720px) {
    margin-bottom: 60px;
    font-size: 40px;
  }
`
