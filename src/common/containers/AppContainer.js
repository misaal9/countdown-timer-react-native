import { connect } from 'react-redux'
import { loadAction } from '../actions/AppActions'
import { AppView } from '../components/AppView'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
  return {
    appState: state.app
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAppData: bindActionCreators(loadAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView)