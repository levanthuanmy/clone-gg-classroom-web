import React from "react"

const LeftMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className="cus-menu-left"
      style={
        showMenu
          ? { width: "16rem", height: "auto" }
          : { width: "4rem", height: "auto" }
      }
    >
      <div
        className={`p-3 w-100 text-secondary me-3 h6 cus-menu-item cus-menu-item--active`}
      >
        <i className="bi bi-house-door-fill h4 me-3" />
        {showMenu && <span>Trang chính</span>}
      </div>
      <div className={`p-3 w-100 text-secondary me-3 h6 cus-menu-item`}>
        <i className="bi bi-calendar-event h4 me-3" />
        {showMenu && <span>Sự kiện sắp tới</span>}
      </div>
      <div className={`p-3 w-100 text-secondary me-3 h6 cus-menu-item`}>
        <i className="bi bi-gear-fill h4 me-3" />
        {showMenu && <span>Cài đặt</span>}
      </div>
    </div>
  )
}

export default LeftMenu
