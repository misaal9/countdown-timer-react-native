import React from 'React'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Text, Right, Icon, Separator } from 'native-base'

const DefaultMark = () => <Icon name="md-checkmark" style={{color: 'green'}}/>

export default class Lists extends React.Component {
  renderListItems () {
    const { timers } = this.props.screenProps.data
    if (!timers.length) {
      return <Text>No items to show</Text>
    }

    return (
      timers.map( (item, idx) => {
        return (
          <ListItem key={idx}>
            <Left>
              <Icon name='md-alarm' />
              <Text>{ item.title }</Text>
            </Left>
            <Right>
              { item.isDefault ? <DefaultMark /> : null }
            </Right>
          </ListItem>
        )
      })
    )
  }
  
  render () {
    return (
      <Container>
        <Content>
          <List>
            { this.renderListItems() }
          </List>
        </Content>
      </Container>
    )
  }
}