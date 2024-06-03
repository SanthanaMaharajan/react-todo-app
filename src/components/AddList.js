import React from 'react';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import { addTaskToList } from '../Slice/TaskSlice';
import { useDispatch } from 'react-redux';

function AddList() {
    const dispatch=useDispatch()
    const [list,setList]=useState("")

    const addList=(e)=>{
        e.preventDefault()
        dispatch(addTaskToList({list}))
        setList('')
    }

    return ( 
        <>
            <Container className='py-5'>
                <h4 className='text-light fw-bold'>Todo List</h4>
                <form>
                    <input type='text' placeholder="What's on your mind?" value={list} onChange={(e)=>setList(e.target.value)} />
                    <button type='submit' onClick={(e)=>addList(e)}>Submit</button>
                </form>
            </Container>
        </>
     );
}

export default AddList;