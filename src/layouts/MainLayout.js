import React, { PureComponent } from 'react'
import styled from 'styled-components'

class MainLayout extends PureComponent {
  render () {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100%
`

export default MainLayout
