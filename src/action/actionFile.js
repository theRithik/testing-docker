const base_url = "http://localhost:2001";

export function courseList(){
    const output= fetch(`${base_url}/course`,{method:'GET'})
      .then((data)=> data.json())


      return{
        type:'COURSE_LIST',
        payload:output
      }
}

export function enquire (){

  const input = fetch(`${base_url}/form`,{method:'GET'})
  .then((data)=>data.json())


  return{
    type:'ENQUIRE_LIST',
    payload:input
  }
}

