import React from 'React'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Text, Right, Icon, Separator } from 'native-base'

export default class Lists extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>List</Title>
          </Body>
          <Right>
            <Icon name="md-add" />
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Icon name="md-alarm" />
                <Text>Office Timer</Text>
              </Left>
              <Right />
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="md-alarm" />
                <Text>Study Break</Text>
              </Left>
              <Right>
                <Icon name="md-checkmark" style={{color: 'green'}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="md-alarm" />
                <Text>Food</Text>                
              </Left>
              <Right/>
              </ListItem>
            <ListItem>
              <Left>
                <Icon name="md-alarm" />
              <Text>Jog</Text>                
              </Left>
              <Right/>
              </ListItem>
            <ListItem>
              <Left>
                <Icon name="md-alarm" />
                <Text>Walk</Text>
              </Left>
              <Right/>
              </ListItem>
            <ListItem>
              <Left>
                <Icon name="md-alarm" />
                <Text>Gym Workout</Text>
              </Left>
              <Right/>
              </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}