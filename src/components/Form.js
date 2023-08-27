import React,{useState} from "react";




const Form=()=>{
    let[user,setUser]=useState(
        {name:"" , email:"" , password:""}
    );

    let{name,email,password}=user

 const signup=(e,user)=>{
    e.preventDefault();
    setUser();
   
 }
 console.log(user);


    return(
        <div>
            <div>
            <form onSubmit={(e,user) => signup(e,user)}>
                <label htmlFor="name">Name </label>
                <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})}></input><br />
                   <label htmlFor="name">Email</label>
                <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})}></input><br />
                   <label htmlFor="name">Password </label>
                <input type="text" onChange={(e)=>setUser({...user,password:e.target.value})}></input><br />
            </form>
        </div>
        <button type="submit">Submit</button>
        </div>
    )
}


export default Form;