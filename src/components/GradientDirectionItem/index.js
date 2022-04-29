import {GradientDirectionItemContainer, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, isActive, onChangeDirection} = props
  const {displayText, value} = eachDirection

  const onClickDirectionButton = () => {
    onChangeDirection(value)
  }

  return (
    <GradientDirectionItemContainer>
      <Button
        type="button"
        isActive={isActive}
        onClick={onClickDirectionButton}
      >
        {displayText}
      </Button>
    </GradientDirectionItemContainer>
  )
}
export default GradientDirectionItem
