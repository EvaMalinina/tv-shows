import styled from 'styled-components';

export const Sorting = styled.div`
  @media (max-width: ${props => props.theme.mobile}) {
    margin: 0 auto;
  }
  
  label {
    color: ${props => props.theme.$lightGrey};
    display: flex;
    align-items: center;
    white-space: nowrap;

    @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
    }
  }
`

export const SelectContainer = styled.div`
  width: 100%;
  min-width: 180px;
  margin-left: 10px;

  @media (max-width: ${props => props.theme.mobile}) {
    margin-top: 10px;
  }
`;
