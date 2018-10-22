import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class LoginUser extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        LoginUser
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser)
