import {
  CardItemContainer,
  CardImage,
  Heading,
  Paragraph,
  TextContainer,
} from './styledComponents'

const CardItem = props => {
  const {cardDetails} = props
  return (
    <CardItemContainer>
      <CardImage src={cardDetails.imageUrl} alt={cardDetails.name} />
      <TextContainer>
        <Heading>{cardDetails.name}</Heading>
        <Paragraph>{cardDetails.description}</Paragraph>
      </TextContainer>
    </CardItemContainer>
  )
}

export default CardItem
