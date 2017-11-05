import React from 'React'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Text, Right, Icon, Item, Input } from 'native-base'

export default class TitleScreen extends React.Component {
  state = {
    title: ''
  }

  componentWillMount () {
    if (this.props.navigation.state.params) {
      const { title } = this.props.navigation.state.params
      this.setState({
        title
      })
    }
  }

  render () {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent:'center' }}>
          <Item underline>
            <Input 
              style={{textAlign: 'center'}}
              placeholder="What is this timer for?"
              value={this.state.title}
              onChange={(title)=>this.setState({title})}/>
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