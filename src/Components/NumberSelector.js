import styled from "styled-components"
const NumberSelector = ({
    Seterror,
    error,
    Selectednumber,
    SetSelectedNumber
}) => {
    const array = [1,2,3,4,5,6 ];
    const numberSelectorHAndler = (value) =>{
        SetSelectedNumber(value);
        Seterror("")
    };

  return (
     <Container>
        <p className="error">{error}</p>
           <div className="flex">
            {
               array.map((value, i) =>(
                   <Box 
                   isSelected = {value === Selectednumber }
                   key={i}
                   onClick={()=>numberSelectorHAndler(value)}
                   > {value}</Box>
               ))
            }
             </div>
              <p>Selected Number</p>
     </Container>
  )
}

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
 margin-top: 50px;
 .flex{
    display: flex;
    gap: 24px;
} 
 p{
    
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 36px; 
     
}
.error{
    color: red;
}
`
const Box = styled.div`
height: 50px;
width: 50px;
border: 1px solid black;
place-items: center;
display: grid;
font-family: Poppins;
font-size: 20px;
font-weight: 700;
line-height: 36px;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")};

`
export default NumberSelector
