import React from 'react'
import { connect } from 'react-redux'
import { Layout, Icon } from 'antd'

import './index.css'

const { Header } = Layout

const PageHeader = ({ collapsed, dispatch }) => {
  const toggle = () => {
    dispatch({
      type: 'global/collapsed'
    })
  }
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
    </Header>
  )
}

const mapStateToProps = ({ commons: { collapsed } }) => ({ collapsed })

export default connect(mapStateToProps)(PageHeader)
