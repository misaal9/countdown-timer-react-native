import React from 'React'
import { Container, Header, Left, Body, Title, Content, Button, List, ListItem, Text, Right, Icon, Switch } from 'native-base'

export default class TitleScreen extends React.Component {
  state = {
    alarm: false,
    push: false,
    ring: false
  }

  componentWillMount () {
    if (this.props.navigation.state.params) {
      const { alarm, push, ring } = this.props.navigation.state.params.notification
      this.setState({
        alarm,
        push,
        ring
      })
    }
  }

  render () {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <List>
            <ListItem>
              <Left>
                <Text>Alarm</Text>
              </Left>
              <Right>
                <Switch value={this.state.alarm} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Notification</Text>
              </Left>
              <Right>
                <Switch value={this.state.push} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Ring Phone</Text>
              </Left>
              <Right>
                <Switch value={this.state.ring} />
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