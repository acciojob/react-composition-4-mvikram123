import React,{useState} from "react";




const Form=()=>{
    let[user,setUser]=useState(
        {name:"" , email:"" , password:""}
    );

    let{name,email,password}=user

 const signup=(e)=>{
    e.preventDefault();
    setUser(...user);
   
 }
 console.log(user);


    return(
        <div>
            <div>
            <form onSubmit={signup}>
                <label for="name">Name </label>
                <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})}></input><br />
                   <label for="name">Email</label>
                <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})}></input><br />
                   <label for="name">Password </label>
                <input type="text" onChange={(e)=>setUser({...user,password:e.target.value})}></input><br />
            </form>
        </div>
        <button>Submit</button>
        </div>
    )
}


export default Form;