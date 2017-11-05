import React from 'React'
import { View } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"
import { Picker } from 'react-native'
import { Container, Header, Left, Body, Title, Content, List, ListItem, Item, Form, Text, Right, Icon } from 'native-base'

export default class TimeScreen extends React.Component {
  state = {
    hour: "4",
    minute: "30"
  }

  componentWillMount() {
    if (this.props.navigation.state.params) {
      const { time } = this.props.navigation.state.params
      this.setState({
        hour: `${time.hour}`,
        minute: `${time.minute}`
      })      
    }
    
  }

  renderEasyGridPicker() {
    return(
      <Grid style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Col />
        <Col>
          <Picker
            selectedValue={this.state.hour}
            onValueChange={(hour, itemIndex) => this.setState({hour})}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
        </Col>
        <Col style={{ alignItems: 'center' }}>
          <Text> : </Text>
        </Col>
        <Col>
          <Picker
            selectedValue={this.state.minute}
            onValueChange={(minute, itemIndex) => this.setState({minute})}>
            <Picker.Item label="00" value="0" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="50" value="50" />
          </Picker>
        </Col>
        <Col />
      </Grid>
    )
  }
 
  render () {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          { this.renderEasyGridPicker() }
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