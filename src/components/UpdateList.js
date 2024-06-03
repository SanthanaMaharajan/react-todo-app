import React from 'react';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskList } from '../Slice/TaskSlice';

function MyVerticallyCenteredModal(props) {

    const {selectedList}=useSelector((state)=>state.lists)
    const dispatch=useDispatch()

    const [list,setList]=useState("")
    const [id,setId]=useState(0)
    const updateList=()=>{
        props.onHide()
        dispatch(updateTaskList({id,list}))
    }

    useEffect(() => {
      setList(selectedList.list)
      setId(selectedList.id)
    }, [selectedList])
    
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>List Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Name" value={list} onChange={(e)=>setList(e.target.value)} />
            </Form.Group>            
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={updateList}>Update List</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal;