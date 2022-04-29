import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 20;
  }
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const DirectionsListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
`
export const ColorsContainer = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const EachColorContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`

export const CustomInput = styled.input`
  height: 40px;
  width: 100px;
  border: none;
  outline: none;
  background-color: transparent;
`
export const Button = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 50px;
  background-color: lightgreen;
`
