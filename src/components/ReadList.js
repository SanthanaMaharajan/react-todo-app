import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from '../img1.webp';
import AddList from './AddList';
import { BsPen } from "react-icons/bs";
import MyVerticallyCenteredModal from './UpdateList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSelectedTask } from '../Slice/TaskSlice';
import { removeFromList } from '../Slice/TaskSlice';
import {useState} from 'react';
import { completeTaskList } from '../Slice/TaskSlice';



function ReadList() {

    const {todoList}=useSelector((state)=>state.lists)
    const updateList=(list)=>{
        setModalShow(true)
        dispatch(setSelectedTask(list))
    }
    const deleteList=(list)=>{
        dispatch(removeFromList(list))
    }
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch=useDispatch()


    const completeList = (list) => {
        dispatch(completeTaskList(list))
    };
    

    let currentDate= new Date();
    let date=currentDate.getDate()<9? "0"+currentDate.getDate(): currentDate.getDate();
    let month=currentDate.getMonth()<9? "0"+currentDate.getMonth():currentDate.getMonth();
    month++;
    let year=String(currentDate.getFullYear());
    let day=currentDate.getDay();
    day=dayConversion(day);

    return ( 
        <>
            <Container>
                <Row className='mt-3'>
                    <Col xs={4} className='form-sec'>
                        <div className='px-3'>
                            <img src={Image} alt='image' className='img-fluid'/>
                            <AddList/>
                        </div>
                    </Col>
                    <Col xs={8} className='list-sec py-4'>
                        <Container>
                            {
                                todoList&&todoList.map((list)=>{
                                    console.log(list)
                                    return(
                                        
                                        <div className='list py-1 my-3' key={list.id}>
                                        <div>
                                            <h5 style={{ textDecoration: list.completed ? "line-through" : "none",}}>{list.list}</h5>
                                            <span>Created: {day}, {date}/{month}/{year}</span> | <button className='edit' disabled={list.completed} onClick={()=>updateList(list)}><BsPen /> Edit </button>
                                        </div>
                                        <button className='complete' style={{backgroundColor : list.completed ? "green" : "red"}} onClick={()=>completeList(list)}>{list.completed ? 'Completed':'Pending'}</button>
                                        <button className='delete' onClick={()=>deleteList(list)}>Delete</button>
                                    </div>
                                    )
                                })
                            }
                           
                        </Container>
                    </Col>
                </Row>
            </Container>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </>
     );
}

function dayConversion(dayNumber){
	let days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
	return dayNumber=days[dayNumber];
}

export default ReadList;