import React,{Component} from 'react';


const url="http://localhost:2001/form"
class Form extends Component{
constructor(){
    super()
    this.state={
        name:'',
        phoneNumber:'',
        email:'',
        address:'',
        city:'',
        state:'',
        zipcode:''
    }
}

handleChange1=(e)=>{
    this.setState({name:e.target.value})
}
handleChange2=(e)=>{
    this.setState({phoneNumber:e.target.value})
}
handleChange3=(e)=>{
    this.setState({email:e.target.value})
}
handleChange4=(e)=>{
   
    this.setState({address:e.target.value})
}
handleChange5=(e)=>{
    this.setState({city:e.target.value})
}
handleChange6=(e)=>{
    this.setState({state:e.target.value})
}
handleChange7=(e)=>{
    this.setState({zipcode:e.target.value})
}

handleClick=()=>{
    var obj={
                'name':this.state.name,
                'phoneNumber':this.state.phoneNumber,
                'email':this.state.email,
                'address':this.state.address,
                'city':this.state.city,
                'state':this.state.state,
                'zipcode':this.state.zipcode

            }

    fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    })
}

render(){

    return(     
           <>
           <div id='form'>
           <h3 style={{marginTop:'40px', textAlign:'center'}}>Fill the form to get the details  about the <em style={{color:'red'}}> course</em></h3>
           <form class="row g-3 form">
           <div class="col-md-6">
    <label htmlFor="name" class="form-label">Name</label>
    <input type="text" name='name' value={this.state.name} onChange={this.handleChange1} class="form-control" id="name"/>
  </div>
  <div class="col-md-6">
    <label for="phonenumber" class="form-label">Phone Number</label>
    <input type="text" name='name' value={this.state.phoneNumber} onChange={this.handleChange2}  class="form-control" id="phonenumber"/>
  </div>
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" name='email' value={this.state.email} onChange={this.handleChange3}  class="form-control" id="email"/>
  </div>
  
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" name='address' value={this.state.address} onChange={this.handleChange4}  class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" name='city' value={this.state.city} onChange={this.handleChange5}  class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
   <input type='text' name='state' value={this.state.state} onChange={this.handleChange6}  className='form-control'/>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" name='zipcode' value={this.state.zipcode} onChange={this.handleChange7}  class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Want to get updates from us
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-success" onClick={this.handleClick}>Submit</button>
  </div>
</form>
</div>
        </>
    )
}
}

export default Form;