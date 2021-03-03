import styled from "styled-components";

export const FilmsHeader = styled.div`
  padding: 10px 0 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${props => props.theme.$white};
  border-bottom: 2px solid ${props => props.theme.$grey};
  margin-bottom: 30px;
  background-color: ${props => props.theme.$trans};
  letter-spacing: 1px;
`

export const FilmsNav = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.mobile}) {
    justify-content: center;
  }
`

export const FilmsItem = styled.li`
  margin-left: 10px;
  padding: 0px;
  position: relative;
  
  &:first-child {
    margin-left: 0px;
  }
  
  &:after {
    content: '';
    display: none;
    width: 10px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.$red};
  }

  &:hover:after {
    display: flex;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    margin: 0 25px 20px 0;
  }
`
export const Sorting = styled.div`

  @media (max-width: ${props => props.theme.mobile}) {
    margin: 0 auto;
  }
  
  label {
    color: ${props => props.theme.$lightGrey};
  }
  
  select {
    margin-left: 10px;
    background-color: ${props => props.theme.$trans};
    color: ${props => props.theme.$white};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 11px;
  }
`
