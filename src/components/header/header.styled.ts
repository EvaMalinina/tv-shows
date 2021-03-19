import styled from "styled-components";
import headerBg from "../../assets/headerBg.jpg";
import { Btn } from "../../styles/general";


export const BtnAddMovie = styled(Btn)`
  border-radius: 0;
  padding: 5px 8px;
  justify-self: end;
`

export const InputSearchMovie = styled.input`
  color: ${props => props.theme.$textGrey};
  background-color: ${props => props.theme.$darkGrey};
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  border: none;
  min-width: 300px;
  
  &::placeholder {
    color: ${props => props.theme.$textGrey};
  }

  @media (max-width: ${props => props.theme.mobile}) {
    min-width: 90%;
  }
`

export const BtnSearchMovie = styled(Btn)`
  background-color: ${props => props.theme.$red};
  color: ${props => props.theme.$white};
  margin-left: 25px;

  @media (max-width: ${props => props.theme.mobile}) {
    margin: 20px 0 0;
  }
`

export const HeaderC = styled.header`
  background-image: url(${headerBg});
  margin-bottom: 8px;
`

export const HeaderPadding = styled.header`
  padding: 30px 0 60px;
`


