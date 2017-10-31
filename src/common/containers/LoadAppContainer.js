import { connect } from 'react-redux'
import { loadAction } from '../actions/AppActions'
import { LoadAppView } from '../components/LoadAppView'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
  return {
    appState: state.app
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: bindActionCreators(loadAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoadAppView)