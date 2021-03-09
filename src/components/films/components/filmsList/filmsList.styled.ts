import styled from "styled-components";

export const FilmsQ = styled.div`
  color: ${props => props.theme.$white};
  text-align: left;
  margin-bottom: 20px;
`

export const Movie = styled.div`
  margin: 0 10px 10px;
  color: ${props => props.theme.$lightGrey};
  width: 200px;
  min-height: 400px;
  text-align: left;

  @media (max-width: ${props => props.theme.mobile}) {
    margin: 0 0 20px;
  }
`
