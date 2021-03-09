import styled from "styled-components";

export const Bg = styled.div`
  background-color: ${props => props.theme.$bg};
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
`

export const BgForm = styled.div`
  background-color: ${props => props.theme.$darkGrey};
  width: 400px;
  padding: 20px 0;
  margin: 5% auto;
  position: relative;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  h2 {
    color: ${props => props.theme.$white};
    text-transform: uppercase;
    margin-bottom: 15px;
    font-weight: 400;
    letter-spacing: 1px;
  }
  
  label {
    margin-bottom: 15px;
    color: ${props => props.theme.$red};
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    letter-spacing: 1px;
  }
  
  input {
    background-color: ${props => props.theme.$lightGrey};
    color: ${props => props.theme.$white};
    padding: 5px;
    margin-top: 7px;
    width: 100%;
  }
`

export const BtnPopupClose = styled.button`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => props.theme.$trans};
  color: ${props => props.theme.$white};
  font-size: 18px;
`
