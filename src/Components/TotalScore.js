import styled from "styled-components";

const ScoreConatiner = styled.div`
 width: 200px;
 margin: 0px;
 text-align: center;
 line-height: 10px;
 h1{
     font-size: 70px;
 }
p{
    font-size: 30px;
}
`
const TotalScore = ({score}) => {
  return (
    <ScoreConatiner>
      <h1>{score}</h1>
     <p>Total Score</p>
    </ScoreConatiner>
  )
}

export default TotalScore
