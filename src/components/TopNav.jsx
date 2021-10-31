import React from "react"

const TopNav = ({ showMenu, setShowMenu }) => {
  return (
    <div className="vw-100 cus-top-nav d-flex align-items-center">
      <div
        className="cus-toggle-menu-btn ms-2 me-3 rounded-circle d-flex align-items-center justify-content-center text-secondary"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <i className="bi bi-x-lg h3 mb-0" />
        ) : (
          <i className="bi bi-list h2 mb-0" />
        )}
      </div>

      <div className="cus-title h2 mb-0">My Classroom</div>
    </div>
  )
}

export default TopNav
