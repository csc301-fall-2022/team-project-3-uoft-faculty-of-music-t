import React from 'react'
import "../App.css"
import "./AdminPage.css"
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className='adminPage'>
        <div className='title-container'>
            <Link to="/" className="title-link">
                <h1 className="title">Cello Exercise Index</h1>
            </Link>
            <h2 className="admin-welcome">Hello, Admin!</h2>
        </div>
        <div className='admin-main-container'>
            <div className='admin-tab-container'>
                admin tab
            </div>
            <div className='admin-item-container'>
                admin item
            </div>
        </div>
    </div>
  )
}

export default AdminPage