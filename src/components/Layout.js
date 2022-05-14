import React from 'react'
import PropTypes from "prop-types"

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div data-id="layout">
    <Navbar />
     {children}
     <Footer />
    </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default Layout

