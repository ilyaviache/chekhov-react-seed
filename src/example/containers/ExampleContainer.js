import { connect } from 'react-redux'
import { getExampleCount, getExampleText } from 'src/example/exampleSelectors'
import { increment, changeText } from 'src/example/exampleActions'
import Example from 'src/example/components/Example'

const mapStateToProps = state => ({
  count: getExampleCount(state),
  text: getExampleText(state),
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
  onChange: text => dispatch(changeText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Example)
