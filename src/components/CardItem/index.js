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
    <>
      <CardImage src={cardDetails.imageUrl} alt={cardDetails.name} />
      <TextContainer>
        <Heading>{cardDetails.name}</Heading>
        <Paragraph>{cardDetails.description}</Paragraph>
      </TextContainer>
    </>
  )
}

export default CardItem
