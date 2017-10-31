import React from 'React'
import { Container, Header, Left, Body, Title, Content, Button, List, ListItem, Text, Right, Icon, Switch } from 'native-base'

export default class TitleScreen extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>More</Title>
          </Body>
          <Right>
            <Icon style={styles.rightIcons} name="md-alarm" />
            <Icon style={styles.rightIcons} name="md-list" />
          </Right>
        </Header>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <List>
            <ListItem>
              <Left>
                <Text>Alarm</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Notification</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Ring Phone</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
          </List>
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