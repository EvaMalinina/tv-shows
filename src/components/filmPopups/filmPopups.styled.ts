import styled from "styled-components";
import {Btn} from "../../styles/general";

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

  p {
    color: ${props => props.theme.$white};
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 300;
  }
  
  label {
    margin-bottom: 15px;
    color: ${props => props.theme.$red};
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    letter-spacing: 1px;
    
    .rfs-select-container {
      margin-top: 5px;
    }
    
    .rfs-autosize-input {
      background-color: ${props => props.theme.$trans};
      padding: 0px;
    }
  }
  
  input {
    background-color: ${props => props.theme.$btnBg};
    color: ${props => props.theme.$white};
    padding: 9px;
    margin-top: 7px;
    width: 100%;
    font-size: 15px;
    border-radius: 3px;
    overflow: hidden;
  }
  
  #movieId {
    background-color: ${props => props.theme.$trans};
    text-transform: uppercase;
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

export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const BtnReset = styled(Btn)`
  background-color: ${props => props.theme.$trans};
  margin-right: 20px;
  border: 1px solid ${props => props.theme.$red};
  padding: 8px 20px;
`

export const BtnSubmit = styled(Btn)`
  background-color: ${props => props.theme.$red};
  color: ${props => props.theme.$white};
  padding: 8px 20px;
  align-self: flex-end;
`
