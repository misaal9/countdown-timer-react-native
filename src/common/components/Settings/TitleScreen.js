import React from 'React'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Text, Right, Icon } from 'native-base'

export default class TitleScreen extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Title</Title>
          </Body>
          <Right>
            <Icon style={styles.rightIcons} name="md-alarm" />
            <Icon style={styles.rightIcons} name="md-list" />
          </Right>
        </Header>
        <Content>
          
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