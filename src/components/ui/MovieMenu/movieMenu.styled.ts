import styled from "styled-components";

export const MovieMenuStyled = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => props.theme.$darkGrey};
  color: ${props => props.theme.$lightGrey};
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MovieMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.$darkGrey};
  color: ${props => props.theme.$lightGrey};
  position: absolute;
  right: 40px;
  top: 10px;
  border-radius: 3px;
`

export const MovieMenuLi = styled.li`
  padding: 5px;
  display: flex;
  
  button {
    background-color: ${props => props.theme.$trans};
    color: ${props => props.theme.$lightGrey};
    
    &:hover {
      color: ${props => props.theme.$white};
    }
  }
`
