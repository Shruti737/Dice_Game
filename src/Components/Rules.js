import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <div>
      <RulesContainer>
       <h2>How to play dice game</h2>
       <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
       </div>
      </RulesContainer>
    </div>
  )
}

const RulesContainer = styled.div`
  background-color: #FBF1F1;
  padding: 20px;
  width: 754px;
  height: 220px;
  gap: 4px;
  opacity: 0px;
  margin: 0 auto;
  margin-top : 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  h2{
    font-size: 24px;
    
  }
  .text{
    margin-top: 24px;
  }
;
`
export default Rules;
