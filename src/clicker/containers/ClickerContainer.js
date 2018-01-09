import { connect } from 'react-redux'
import { getCount } from 'src/clicker/clickerSelectors'
import { increment } from 'src/clicker/clickerActions'
import Clicker from '../components/Clicker'

const mapStateToProps = state => ({
  count: getCount(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Clicker)
