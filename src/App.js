import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './App.css'

import {
  OuterContainer,
  InnerContainer,
  ListItem,
  ResultContainer,
  Heading,
  LoaderContainer,
  ResultListItem,
} from './styledComponents'
import CardItem from './components/CardItem'

class App extends Component {
  state = {destinationList: [], isLoading: true}

  componentDidMount = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const packagesList = data.packages.map(item => ({
        id: item.id,
        imageUrl: item.image_url,
        description: item.description,
        name: item.name,
      }))
      this.setState({destinationList: [...packagesList], isLoading: false})
    }
  }

  render() {
    const {destinationList, isLoading} = this.state
    return (
      <OuterContainer>
        <InnerContainer>
          <li>
            <Heading>Travel Guide</Heading>
          </li>
          <ListItem>
            {!isLoading && (
              <ResultContainer>
                {destinationList.map(item => (
                  <ResultListItem key={item.id}>
                    <CardItem cardDetails={item} />
                  </ResultListItem>
                ))}
              </ResultContainer>
            )}

            {isLoading && (
              <LoaderContainer data-testid="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </LoaderContainer>
            )}
          </ListItem>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default App
