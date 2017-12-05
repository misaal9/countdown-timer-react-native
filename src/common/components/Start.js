import React from 'React'
import moment from 'moment'
import { View } from 'react-native'
import { Container, Header, Left, Body, Title, Button, Content, List, ListItem, Text, Right, Icon } from 'native-base'

export default class Start extends React.Component {
  state = {
    hour: '4',
    minute: '30',
    isRunning: false
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

  initiateCountdown() {
    if (this.state.isRunning) {
      this.stopTimer()
    } else {
      this.startTimer()
    }
  }

  stopTimer() {
    this.setState({ isRunning: false })
  }

  startTimer() {
    this.setState({ isRunning: true })
    this.setEndTime()
    this.startCountdownTimer()
  }

  setEndTime() {
    const { hour, minute } = this.props.navigation.state.params.time
    const startTimeinHM = moment()
    const endTimeinHM = moment(startTimeinHM).add({ hours: hour, minutes: minute })
    console.log(`Added duration for: ${hour}:${minute}`)
    console.log(moment(startTimeinHM).format('h:m'))
    console.log(moment(endTimeinHM).format('h:m'))
    // call action to set endTime in firebase
    /*
      payload: {
        startTime
        endTime,
        isRnning: true
      }
    */
  }

  startCountdownTimer() {

  }

  getDuration () {
    return 100
  }

  render () {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <View style={styles.view}>
            <Text style={styles.tim}>
              { `${this.state.hour}:${this.state.minute}` }
            </Text>
            <Text> { this.state.isRunning ? 'Timer is running' : '' } </Text>
          </View>
          <Button 
            block
            success
            style={styles.button}
            onPress={()=>this.initiateCountdown()}
            >
            <Text>{ this.state.isRunning ? 'Stop' : 'Start' }</Text>
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