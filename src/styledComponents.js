import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InnerContainer = styled.ul`
  flex-grow: 1;
  background-color: #eef4f7;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 0;
`

export const ListItem = styled.li`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const ResultContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
  gap: 20px;
  padding: 20px;
`

export const ResultListItem = styled.li`
  width: calc(50% - 10px);
`

export const Heading = styled.h1`
  border-bottom: 2px solid #52bbf0;
`

export const Paragraph = styled.p``

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
