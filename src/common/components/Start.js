import React from 'React'
import { View } from 'react-native'
import { Container, Header, Left, Body, Title, Button, Content, List, ListItem, Text, Right, Icon } from 'native-base'

export default class Start extends React.Component {
  render () {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <View style={styles.view}>
            <Text style={styles.tim}>4:30</Text>  
          </View>
          <Button 
            block
            success
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('Time')}
            >
            <Text>Start</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = {
  rightIcons: {
    marginLeft: 20,
  },
  tim: {
    fontSize: 100
  },
  view: {
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}