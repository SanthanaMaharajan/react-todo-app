import { createSlice } from '@reduxjs/toolkit'

const initialState={
    todoList:[],
    selectedList:{}
}
export const listSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers: {
        addTaskToList:(state,action)=>{
            const id=Math.random()*1000
            const completed =false
            let list={...action.payload,id,completed}
            state.todoList.push(list)
        },
        removeFromList:(state,action)=>{
            state.todoList=state.todoList.filter((list)=>list.id !==action.payload.id)
        },
        updateTaskList:(state,action)=>{
            state.todoList=state.todoList.map((list)=>list.id===action.payload.id?action.payload:list)
        },
        completeTaskList:(state,action)=>{
            state.todoList=state.todoList.map((list)=>list.id===action.payload.id? {...list,completed:true} :list)
        },
        setSelectedTask:(state,action)=>{
            state.selectedList=action.payload
        }
        
    },
  })
  export const {addTaskToList,removeFromList,updateTaskList,completeTaskList,setSelectedTask}=listSlice.actions
  export default listSlice.reducer