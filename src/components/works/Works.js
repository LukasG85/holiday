import React from "react"
import styled from "styled-components"
import Card from "./Card"
import CardImg1 from "../../images/card1.jpg"
import CardImg2 from "../../images/card2.jpg"
import CardImg3 from "../../images/card3.jpg"
import Title from "../global/Title"

const works = [
  {
    id: 1,
    step: "step1",
    title: `Sed leo enim,
    condimentum`,
    text: `Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.`,
    image: CardImg1,
  },
  {
    id: 2,
    step: "step2",
    title: `Morbi velit risus,
    condimentum`,
    text: `Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.`,
    image: CardImg2,
  },
  {
    id: 3,
    step: "step3",
    title: `Sed leo enim,
    condimentum`,
    text: `Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.`,
    image: CardImg3,
  },
]

const worksItem = works.map(item => <Card key={item.id} info={item} />)

export default function Works() {
  return (
    <WorksWrapper>
      <Title title="How Dreamshare works?" />
      <div className="container">
        <div className="row card-container">{worksItem}</div>
      </div>
    </WorksWrapper>
  )
}

const WorksWrapper = styled.section`
  margin-top: 40px;

  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    color: #333333;
    text-align: center;
  }
  .card-container {
    justify-content: center;
  }
  @media (min-width: 992px) {
    margin-top: 100px;

    h2 {
      margin-bottom: 40px;
      font-size: 40px;
    }
  }
`
