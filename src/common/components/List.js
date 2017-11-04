import React from 'React'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Text, Right, Icon, Separator } from 'native-base'

const DefaultMark = () => <Icon name="md-checkmark" style={{color: 'green'}}/>

export default class Lists extends React.Component {
  componentWillMount () {
    console.log(this.props.items)
  }

  renderListItems () {
    const { items } = this.props
    if (!items.length) {
      return <Text>No items to show</Text>
    }

    return (
      items.map( (item, idx) => {
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
            { this.renderListItems() }
          </List>
        </Content>
      </Container>
    )
  }
}