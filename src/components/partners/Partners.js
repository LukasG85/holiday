import React from "react"
import styled from "styled-components"
import Partner from "./Partner"
import partner1 from "../../images/person1.jpg"
import partner2 from "../../images/person2.jpg"
import partner3 from "../../images/person3.jpg"
import partner4 from "../../images/person4.jpg"
import { FaTv, FaCoffee, FaVial, FaTelegramPlane } from "react-icons/fa"
import { PartnersButton } from "../global/Button"
import Title from "../global/Title"

const partners = [
  {
    id: 1,
    name: "Bradley Cooper",
    info: "sed in Chicago. I love playing tennis and loud music.",
    picture: partner1,
    icon: <FaTv />,
    color: "#ff4e50",
  },
  {
    id: 2,
    name: "John Doe",
    info: "I'm a happy person that loves cats and climbing on mountains.",
    picture: partner2,
    icon: <FaCoffee />,
    color: "#ffa507",
  },
  {
    id: 3,
    name: "John Bean",
    info:
      "I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.",
    picture: partner3,
    icon: <FaVial />,
    color: `#1cd7ad`,
  },
  {
    id: 4,
    name: "Lukas Skywalker",
    info: "Based in Chicago. I love playing tennis and loud music.",
    picture: partner4,
    icon: <FaTelegramPlane />,
    color: "#4e73db",
  },
]

const bestPartners = partners.map(partner => (
  <Partner key={partner.id} partner={partner} />
))
export default function Partners() {
  return (
    <PartnersWrapper>
      <Title title="Meet a partner for your best holiday" />
      <div className="container">
        <div className="row">{bestPartners}</div>
      </div>
      <PartnersButton>See other partners</PartnersButton>
    </PartnersWrapper>
  )
}

const PartnersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media (min-width: 720px) {
    margin-top: 100px;
    h2 {
      margin-bottom: 60px;
      font-size: 40px;
    }
  }
`
