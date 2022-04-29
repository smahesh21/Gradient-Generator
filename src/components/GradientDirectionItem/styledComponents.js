// Style your elements here
import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  height: 40px;
  max-width: 100px;
  border: none;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 22%;
  }
`
export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid black;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 18px;
  margin-right: 10px;
`
