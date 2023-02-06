import React from 'react';



const LatestDisplay=(props)=>{

    const renderCourse =({ldata}) =>{
        if(ldata){
            return ldata.map((item)=>{
                return(
        
       <div className="card" key={item.id} style={{width: '18rem', display:'inline-block'}}>
  <img src={item.image} class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text" style={{color:'black'}}>{item.content}</p>
   <a href='/Form' class='btn btn-primary'>Details</a>
  </div>
</div>
                    
           
                )
            })

        }
    }
    return(
        <div className='container'>
            {renderCourse(props)}
        </div>
    )
}
export default LatestDisplay