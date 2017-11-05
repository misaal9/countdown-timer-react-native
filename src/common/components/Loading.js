import React from 'react'
import { Container, Content, Spinner } from 'native-base'

const loadingSpinnerColor = 'red'

const Loading = () => {
  return (
    <Container>
      <Content contentContainerStyle={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <Spinner color={loadingSpinnerColor}/>
      </Content>
    </Container>
  )
}

export default Loading