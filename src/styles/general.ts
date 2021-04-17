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

export const WrapperPlaceForward = styled.div`
  display: flex;
  z-index: 3;
`

export const Btn = styled.button`
  padding: 10px 15px;
  text-transform: uppercase;
  color: ${props => props.theme.$red};
  background-color: ${props => props.theme.$btnBg};
  border-radi${props => props.theme.$red}us: 2px;
  overflow: hidden;
  letter-spacing: 1px;
`

export const BtnErrorPage = styled(Btn)`
  padding: 12px 40px;
  border: 2px solid ${props => props.theme.$red};
  background-color: ${props => props.theme.$trans};
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 16px;
`

export const SuspenseWrapper = styled.div`
  color: ${props => props.theme.$white};
  background-color: ${props => props.theme.$bg};
  letter-spacing: 2px;
  font-weight: 300;
  position: absolute;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
