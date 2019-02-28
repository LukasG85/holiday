import React from "react"
import styled from "styled-components"

export default function Idea(props) {
  const { title, image, classItem } = props.idea
  return (
    <IdeaWrapper className={classItem} image={image}>
      <h4>{title}</h4>
    </IdeaWrapper>
  )
}

const IdeaWrapper = styled.div`
  position: relative;
  height: 310px;
  margin: 10px;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  h4 {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 25px;
    font-weight: 500;
  }

  @media (min-width: 992px) {
    transition: 0.2s;
    &:hover {
      background-image: ${props =>
        `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5)
    ), url(${props.image})`};
    }
  }
`
