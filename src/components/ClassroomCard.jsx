import React from "react"
import { Image } from "react-bootstrap"

const ClassroomCard = ({ classroom }) => {
  const renderAvatar = () => (
    <div className="cus-classroom-card__avatar position-relative w-100">
      <div className="cus-classroom-card__avatar__img rounded-circle h-100 bg-white">
        <Image
          src={`/images/default-user-${
            Math.floor(Math.random() * 2) ? "wo" : ""
          }man.png`}
          fluid
          className="rounded-circle"
        />
      </div>
    </div>
  )
  return (
    <div className="cus-classroom-card rounded">
      <div className="h-50 bg-success w-100 rounded-top p-3 d-flex flex-column justify-content-between  text-white">
        <div className="text-truncate h3">{classroom?.name}</div>
        <div
          className="text-truncate"
          style={{ maxWidth: "calc(100% - 6rem)" }}
        >
          {classroom?.host?.name}
        </div>
      </div>
      <div className="h-50 bg-white rounded-bottom border border-top-0 p-3">
        d
      </div>
      {renderAvatar()}
    </div>
  )
}

export default ClassroomCard
