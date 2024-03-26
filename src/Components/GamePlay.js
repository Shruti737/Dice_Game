import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import Rules from './Rules'
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"

const GamePlay = () => {
  const[score, setScore] = useState(0);
  const[Currentdice, setCurrentdice] = useState(1);
  const[Selectednumber, SetSelectedNumber] = useState();
  const[error, Seterror] = useState("");
  const[ShowRules, setShowRules] = useState(false);

const GenaratedNumber = (start,end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
const resetScore = () => {
   setScore(0)
  }
const DiceRolled = () =>{
  if(!Selectednumber) {
    Seterror("You Have Not Selected The Number")
    return;
  }
 const randomNumber = GenaratedNumber(1,6);
 setCurrentdice((prev) => randomNumber); 

if(Selectednumber === randomNumber){
  setScore((prev) => prev + randomNumber);
}
else{
  setScore(prev => prev - 1);
}
 SetSelectedNumber(undefined)
}
  return (
    <Main>

    <div className='mainDiv1'>
      <TotalScore score = {score}/>
      <NumberSelector
        error ={error}
        Seterror={Seterror}
        Selectednumber = {Selectednumber}
        SetSelectedNumber = {SetSelectedNumber}/>
    </div>
    <RoleDice
       Currentdice={Currentdice}
       DiceRolled={DiceRolled} /> 

    <div className="btn">
      <OutlineButton  onClick={resetScore}>Reset Now</OutlineButton>
      <Button  onClick = {() => setShowRules((prev) => !prev)}>
         {ShowRules ? "Hide " : "Show "}  
         Rules</Button>
    </div>

    {ShowRules && <Rules/>}
    </Main>
  )
}
const Main = styled.div`
.mainDiv1{
  display: flex;
  align-items: end;
  justify-content: space-around;

}
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}
`
export default GamePlay
