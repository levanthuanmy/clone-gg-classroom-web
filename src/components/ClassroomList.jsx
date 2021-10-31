import React from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import ClassroomCard from "./ClassroomCard"

const ClassroomList = ({ showMenu, isLoading, resClassrooms }) => {
  return (
    <Row
      className="m-0 pt-4 ps-4"
      style={
        showMenu
          ? { width: "min(calc(100vw - 17rem), 107rem)" }
          : { width: "min(calc(100vw - 4rem), 108.5rem)" }
      }
    >
      {isLoading ? (
        <div className="mt-5 d-flex justify-content-center">
          <div className="bg-white shadow rounded-circle d-flex justify-content-center align-items-center cus-spinner">
            <Spinner variant="secondary" animation="border" />
          </div>
        </div>
      ) : (
        resClassrooms?.map((item, id) => (
          <Col xs="12" sm="12" md="6" lg="4" xl="3" className="p-0 pe-4 pb-4">
            <ClassroomCard key={id} classroom={item} />
          </Col>
        ))
      )}
    </Row>
  )
}

export default ClassroomList
