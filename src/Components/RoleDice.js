import styled from 'styled-components'

const RoleDice = ({
  Currentdice,
  DiceRolled
}) => {

  return (
    <RoleDiceContainer>
    <div className = 'dice' onClick = {DiceRolled}>
      <img src={`/images/dice_${Currentdice}.png`} alt = "dice" />
    </div>
    <p>Click on dice to roll</p>
    </RoleDiceContainer>
  )
}

const RoleDiceContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 margin-top: 48px;

`
export default RoleDice
