import styled from "styled-components";
import errorImg from "../../assets/404.jpg";

export const ErrorPageC = styled.div`
 position: absolute;
 padding-top: 50px;
 text-align: center;
 width: 100%;
 height: 100vh;
 color: white;
 display: flex;
 flex-direction: column;
 background-color: ${props => props.theme.$darkGrey};
`

export const ErrorPageImg = styled.div`
  background-image: url(${errorImg});
  width: 650px;
  height: 250px;
  margin: 10px auto 50px;
`