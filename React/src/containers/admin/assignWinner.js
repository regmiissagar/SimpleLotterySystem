import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
const AssignWinner =()=> {
  const [ticket, setTicket] = useState([])
  const [drawResponse, setDrawResponse] = useState('') 
  const [currentWinColor, setCurrentWinColor] = useState(null)
  const [currentWinNumber, setCurrentWinNumber] = useState(null)
  const navigate = useNavigate();
  const fetchTicketData = async()=> {
    const data = await fetch('http://localhost:3000/ticket/')
    const tickets = await data.json() 
    const allTicketList = tickets.ticketList
     
    const tempList = []
    allTicketList.map((item)=>{
      if(!tempList.includes(item.ticketNo)){
         tempList.push(item.ticketNo)
      }
    })
    setTicket(tempList)
 }

 useEffect(()=>{
     fetchTicketData()
 },[])

 const predictWinner =()=> {
  const colorArr = ['red', 'green', 'aqua']
  const randIdColor = Math.floor(Math.random()*colorArr.length)
  const randIdTicket = Math.floor(Math.random()*ticket.length)
  setCurrentWinNumber( ticket[randIdTicket])
  setCurrentWinColor(colorArr[randIdColor])
 }

 const saveWinner=()=>{
  const requestOptions = {
    method: "POST",
    headers: {
    'Content-type': 'application/json'
    },
    body: JSON.stringify({color: currentWinColor, ticketNo:currentWinNumber})
    }
    fetch('http://localhost:3000/winner' , requestOptions).then((res)=>res.json())
    .then((data)=> setDrawResponse(data.msg))

 }


    return (
    <>
      {ticket.length >0 && ticket.map((item,id)=>{
        return <div 
      style={{  backgroundColor: currentWinNumber===item  ? currentWinColor : null }}
        >{item}</div>
     })}
     {!drawResponse ? (
      <>
          <button onClick={()=> predictWinner()}>Assign Winner</button>
          <button onClick={()=> saveWinner()}>Save Winner</button>
      </>
     ): drawResponse}
      <br/>
     <button onClick={()=> navigate("/")}>back to homepage</button>
     </>
    );
  }
  
  export default AssignWinner;
  