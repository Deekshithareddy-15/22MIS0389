"use client";

import { useEffect, useState } from "react";

export default function PriorityPage() {

const [notifications,setNotifications]=useState([]);

useEffect(()=>{

async function loadData(){

const response=await fetch("/api/notifications");
const data=await response.json();

const priorityOrder={
Placement:3,
Result:2,
Event:1
};

const sorted=[...data.notifications]
.sort((a,b)=>priorityOrder[b.Type]-priorityOrder[a.Type])
.slice(0,10);

setNotifications(sorted);

}

loadData();

},[]);

return(

<div style={{padding:"20px"}}>

<h1>Top 10 Priority Notifications</h1>

{notifications.map((item)=>(

<div
key={item.ID}
style={{
border:"1px solid gray",
padding:"10px",
margin:"10px"
}}
>

<h2>{item.Type}</h2>

<p>{item.Message}</p>

<p>{item.Timestamp}</p>

</div>

))}

</div>

);

}