import styled from "styled-components";


export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const ContainerRowAlignStart = styled(ContainerRow)`
  align-items: start;
  justify-content: center;
`

export const ContainerSpaceBetween = styled(ContainerRow)`
  justify-content: space-between;
  min-width: 100%;
`
