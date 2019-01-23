import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
