import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  Heading,
  Paragraph,
  DirectionsListContainer,
  ColorsContainer,
  EachColorContainer,
  ColorValue,
  CustomInput,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  renderGradientDirectionList = () => {
    const {activeGradientDirection} = this.state
    return (
      <DirectionsListContainer>
        {gradientDirectionsList.map(eachDirection => (
          <GradientDirectionItem
            eachDirection={eachDirection}
            key={eachDirection.directionId}
            onChangeDirection={this.onChangeDirection}
            isActive={activeGradientDirection === eachDirection.value}
          />
        ))}
      </DirectionsListContainer>
    )
  }

  render() {
    const {fromColorInput, toColorInput, gradientValue} = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        {this.renderGradientDirectionList()}
        <Paragraph>Pick the Colors</Paragraph>
        <ColorsContainer>
          <EachColorContainer>
            <ColorValue>{fromColorInput}</ColorValue>
            <CustomInput
              type="color"
              value={fromColorInput}
              onChange={this.onChangeFromColor}
            />
          </EachColorContainer>
          <EachColorContainer>
            <ColorValue>{toColorInput}</ColorValue>
            <CustomInput
              type="color"
              value={toColorInput}
              onChange={this.onChangeToColor}
            />
          </EachColorContainer>
        </ColorsContainer>
        <Button type="button" onClick={this.onClickGenerate}>
          Generate
        </Button>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
