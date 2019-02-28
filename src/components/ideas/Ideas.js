import React from "react"
import styled from "styled-components"
import Title from "../global/Title"
import idea1 from "../../images/idea1.jpg"
import idea2 from "../../images/idea2.jpg"
import idea3 from "../../images/idea3.jpg"
import idea4 from "../../images/idea4.jpg"
import idea5 from "../../images/idea5.jpg"
import idea6 from "../../images/idea6.jpg"
import idea7 from "../../images/idea7.jpg"
import Idea from "./Idea"

const ideas = [
  {
    id: 1,
    title: "Sport and Activity",
    image: idea1,
    classItem: "image1",
  },
  {
    id: 2,
    title: "Wellnes anh Health",
    image: idea2,
    classItem: "image2",
  },
  {
    id: 3,
    title: "Extreme Sports and Expeditions",
    image: idea3,
    classItem: "image3",
  },
  {
    id: 4,
    title: "Games",
    image: idea4,
    classItem: "image4",
  },
  {
    id: 5,
    title: "Culture and Education",
    image: idea5,
    classItem: "image5",
  },
  {
    id: 6,
    title: "Relaxation",
    image: idea6,
    classItem: "image6",
  },
  {
    id: 7,
    title: "Travelling",
    image: idea7,
    classItem: "image7",
  },
]

const ideasItems = ideas.map(idea => <Idea key={idea.id} idea={idea} />)
export default function Ideas() {
  return (
    <IdeasWrapper>
      <Title title="Discover holiday activity ideas" />
      <div className="container">
        <div className="row ideas-container">{ideasItems}</div>
      </div>
    </IdeasWrapper>
  )
}

const IdeasWrapper = styled.section`
  margin-top: 40px;
  .ideas-container {
    display: grid;
    grid-template-areas:
      "image1" "image2" "image3" "image4" "image5" "image5"
      "image6" "image6" "image7";
    .image1 {
      grid-area: image1;
    }
    .image2 {
      grid-area: image2;
    }
    .image3 {
      grid-area: image3;
    }
    .image4 {
      grid-area: image4;
    }
    .image5 {
      grid-area: image5;
    }
    .image6 {
      grid-area: image6;
    }
    .image7 {
      grid-area: image7;
    }
  }

  @media (min-width: 720px) {
    .ideas-container {
      grid-template-areas:
        "image1 image2 image3" "image4 image5 image5"
        "image6 image6 image7";
    }
  }

  @media (min-width: 992px) {
    margin-top: 100px;
  }
`
