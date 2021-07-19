import React,{useState} from 'react'
import './Product.css'

export default function Product(props) {
  
  const [bg,setBg] = useState('white')
  
  const choose =()=>{

    if(bg === 'white') {
      if(props.permision == true){
        props.add(props.index)
        setBg('lightBlue')
      }
    }
    else {
      props.delete(props.index)
      setBg('white')
    }
  }

  return (
        <div className=' middle text-center' >
           <div onClick={choose} className="card text-center mb-3" style={{backgroundColor:bg,maxWidth:'540px',marginLeft:'auto',marginRight:'auto'}}>
            <div className="row g-0">
             <div className="col-md-4">
             <img src={props.src} alt="logo" />
             </div>
            <div className="col-md-8">
            <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.info}</p>
        <p className="card-text"><small className="text-muted">price: {props.price}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
        
    )
}
