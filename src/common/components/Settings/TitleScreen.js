import React from 'React'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Text, Right, Icon, Item, Input } from 'native-base'

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
        <Content padder contentContainerStyle={{ flex: 1, justifyContent:'center' }}>
          <Item underline>
            <Input style={{textAlign: 'center'}} placeholder="What is this timer for?" />
          </Item>
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