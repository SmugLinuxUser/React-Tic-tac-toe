import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from 'axios';

function Hell(){
const [tic, settic] = useState();

useEffect(()=>{
Axios.get("http://localhost:3002").then((data)=>{
settic(data.data);
});
},[])


return(
<>
<div> ass </div>
<div> {tic} </div>

</>
)

};


ReactDOM.render(<Hell/>, document.getElementById('root'));
