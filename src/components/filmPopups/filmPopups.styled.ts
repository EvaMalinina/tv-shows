import styled from "styled-components";
import {Btn} from "../../styles/general";
import SearchIconLink from "../../assets/search-icon.png";

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
  
   @media (max-width: ${props => props.theme.mobile}) {
    width: 95%;
    margin: 30px 0;
  }
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
    margin-bottom: 18px;
    position: relative;
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

export const FilmOverviewPopup = styled(Bg)`
  min-height: 200px;
  height: fit-content;
  position: static;
  padding: 30px 0 40px;
  min-width: 100%;
`

export const FilmPoster = styled.div`
  width: 200px;
  height: 300px;
  
  @media (max-width: ${props => props.theme.mobile}) {
    margin-bottom: 20px;
  }
`

export const FilmInfo = styled.div`
  margin-left: 30px;
  width: 65%;
  color: ${props => props.theme.$smokyWhite};
  font-weight: 300;
  
  h2 {
    margin: 0;
    text-transform: capitalize;
    
    @media (max-width: ${props => props.theme.mobile}) {
      margin-bottom: 10px;
      width: 100%;
    }
  }
  
  h2 ~ div {
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.$smokyWhite};
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color:  ${props => props.theme.$green};
    margin-left: 20px;
    font-weight: 400;
    
    @media (max-width: ${props => props.theme.mobile}) {
      align-self: center;
      margin: 0 0 10px;
    }
  }
  
  p {
    font-size: 14px;
  }
`

export const Subtitle = styled.div`
  margin: 0 0 20px;
  font-size: 12px;
`

export const FilmInfoColorRed = styled.span`
  color:  ${props => props.theme.$red};
  font-size: 18px;
  margin: 0 30px 15px 0;
  
  &:last-child {
    margin-right: 0;
  }
`

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${SearchIconLink}) center no-repeat;
  background-size: contain;
`

export const ErrorMsg = styled.span`
  color:  ${props => props.theme.$white};
  font-size: 10px;
  font-style: italic;
  text-transform: lowercase;
  position: absolute;
  bottom: -12px;
`