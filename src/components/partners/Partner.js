import React from "react"
import styled from "styled-components"

export default function Partner(props) {
  const { name, info, picture, icon, color } = props.partner

  return (
    <PartnerWrapper color={color} className="col-sm-12 col-md-6 col-lg-3">
      <div className="partner-picture">
        <img src={picture} alt={name} />
        <div className="icon">{icon}</div>
      </div>

      <h5>{name}</h5>
      <p>{info}</p>
    </PartnerWrapper>
  )
}

const PartnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .partner-picture {
    position: relative;
    margin: 0 auto;
    height: 120px;
    width: 120px;
    .icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      border: 3px #fff solid;
      background-color: ${props => `${props.color}`};
    }
  }
  h5 {
    margin: 20px auto;
    font-size: 20px;
    font-weight: 700;
    color: #333333;
  }
  p {
    width: 200px;
    text-align: center;
  }
`
