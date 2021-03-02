import styled from "styled-components";
import headerBg from "../../assets/headerBg.jpg";


export const BtnAddMovie = styled.button`
  background-color: ${props => props.theme.$btnBg};
  padding: 5px 8px;
  text-transform: uppercase;
  color: ${props => props.theme.$red};
  justify-self: end;
`

export const InputSearchMovie = styled.input`
  color: ${props => props.theme.$lightGrey};
  background-color: ${props => props.theme.$darkGrey};
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  border: none;
  min-width: 300px;
`

export const BtnSearchMovie = styled.button`
  background-color: ${props => props.theme.$red};
  color: ${props => props.theme.$white};
  text-transform: uppercase;
  padding: 10px 15px;
  border-radius: 2px;
  overflow: hidden;
  letter-spacing: 1px;
  margin-left: 25px;
`

export const HeaderC = styled.header`
  padding: 30px 0 60px;
  background-image: url(${headerBg});
  margin-bottom: 8px;
`

