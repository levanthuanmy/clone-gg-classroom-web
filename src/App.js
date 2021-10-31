import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { get, post } from "./api"
import ClassroomList from "./components/ClassroomList"
import LeftMenu from "./components/LeftMenu"
import TopNav from "./components/TopNav"

const App = () => {
  const [resClassrooms, setResClassrooms] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm()
  const [isReGet, setIsReGet] = useState(false)

  const getClassrooms = async () => {
    try {
      const res = await get(`/classrooms`)
      setResClassrooms(res)
      res && setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  const createClassroom = async (body) => {
    try {
      setIsLoading(true)
      await post(`/classrooms`, {}, body)
      setIsReGet(true)
    } catch (error) {
      console.log('createClassroom -> error', error)
    }
  }

  useEffect(() => {
    getClassrooms()
  }, [])

  useEffect(() => {
    if (isReGet) {
      getClassrooms()
      setIsReGet(false)
    }
  }, [isReGet])

  const onSubmit = (data) => {
    createClassroom(JSON.stringify(data))
    onHideModal()
  }

  const clearInput = () => {
    setValue('name', null)
    setValue('subject', null)
    setValue('description', null)
    setValue('banner', null)
    setValue('themeColor', null)
  }

  const onHideModal = () => {
    setIsShowModal(false)
    clearInput()
  }

  const renderModal = () => (
    <Modal
      show={isShowModal}
      onHide={() => onHideModal()}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tạo lớp học mới
        </Modal.Title>
      </Modal.Header>

      <Form className="" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>

          <Form.Group>
            <Form.Label>Tên lớp học (bắt buộc)</Form.Label>
            <Form.Control type="text" placeholder="Tên lớp học" {...register("name", { required: true })} />
            {errors.name && <span className="text-danger">Bạn cần nhập tên lớp học.</span>}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Môn học</Form.Label>
            <Form.Control type="text" placeholder="Môn học"  {...register("subject")} />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control type="text" placeholder="Mô tả"  {...register("description")} />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Ảnh bìa</Form.Label>
            <Form.Control type="text" placeholder="Điền liên kết ảnh" {...register("banner")} />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Màu chủ đề</Form.Label>
            <Form.Control type="text" placeholder="Màu chủ đề (đang phát triển)" disabled  {...register("themeColor")} />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button type="submit">Tạo</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )

  return (
    <>

      <TopNav showMenu={showMenu} setShowMenu={setShowMenu} />

      <div className="d-flex mt-4">

        <LeftMenu showMenu={showMenu} setShowMenu={setShowMenu} />

        <div>

          <div className="ps-4 d-flex align-items-center">
            <div className="h3 text-secondary">Lớp học của bạn</div>

            <div className="ms-4 text-white bg-secondary rounded-circle d-flex align-items-center justify-content-center cus-add-button" onClick={() => setIsShowModal(true)}>
              <div className="h1 user-select-none">+</div>
            </div>
          </div>

          <ClassroomList isLoading={isLoading} showMenu={showMenu} resClassrooms={resClassrooms} />
        </div>

        {renderModal()}

      </div>
    </>
  )
}

export default App
