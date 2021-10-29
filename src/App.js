import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { get } from "./api"
import ClassroomCard from "./components/ClassroomCard"

const App = () => {
  const [resClassrooms, setResClassrooms] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [showMenu, setShowMenu] = useState(true)

  const getClassrooms = async () => {
    try {
      const res = await get(`/classrooms`)
      setResClassrooms(res)
      res && setIsLoading(false)
    } catch (error) {
      setError(error.statusCode)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getClassrooms()
  }, [])

  return isLoading ? <div>Loading</div> : (
    <>
      <div className="bg-white" style={{ height: "4rem" }}>
        MyClassroom
      </div>

      <div className="d-flex">
        <div className="cus-menu-left bg-warning" style={showMenu ? { width: '18rem', height: "100vh" } : { width: '4rem', height: "100vh" }}>
          <div onClick={() => setShowMenu(!showMenu)}>
            menu
          </div>
        </div>

        <div>
          <Row className="m-0 pt-4 ps-4" style={showMenu ? { width: 'min(calc(100vw - 18rem), 106.5rem)' } : { width: 'min(calc(100vw - 4rem), 106.5rem)' }}>
            {resClassrooms?.map((item, id) => (
              <Col xs="12" sm="12" md="6" lg="4" xl="3" className="p-0 pe-4 pb-4">
                <ClassroomCard key={id} classroom={item} />
              </Col>
            ))}
          </Row>
        </div>

      </div>
    </>
  )
}

export default App
