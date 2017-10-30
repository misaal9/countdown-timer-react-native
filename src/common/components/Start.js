import React from 'React'
import { Container, Header, Left, Body, Title, Button, Content, List, ListItem, Text, Right, Icon } from 'native-base'

export default class Start extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Start</Title>
          </Body>
          <Right>
            <Icon style={styles.rightIcons} name="md-settings" />
            <Icon style={styles.rightIcons} name="md-list" />
          </Right>
        </Header>
        <Content padder>
          <Text>3</Text>
          <Text>:</Text>
          <Text>40</Text>
          <Button block danger>
            <Text>Start</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = {
  rightIcons: {
    marginLeft: 20
  }
}