import styled from "styled-components"
import { Button } from "../styled/Button"

const Container = styled.div`
   height: 100vh;
   width: 1182px;
   display: flex;
   align-items: center; 
   margin: 0px auto;
   ;
   #Conatiner-inner-div2{
    h1{
        font-size: 96px;
        font-family: "Poppins", sans-serif;
        white-space: nowrap;
        margin-bottom: 0px;
    }
   }
  
  `

const Startgame = ({toggle}) => {
    return (
        <Container>
            <div id="Conatiner-inner-div1">
                <img src="./images/dices.png" alt="dices" />
            </div>

            <div id="Conatiner-inner-div2">
                <h1>Dice Game</h1>
                <Button onClick={toggle}> Play Now </Button>
            </div>
        </Container>
    )
}

export default Startgame;
