
import React,{useState} from 'react'
import Countdown from 'react-countdown';
import './Payment.css'

export default function Payment(props) {

    const [tableNumber,setTableNumber] = useState(0)
    const [counterList,setCounterList] = useState(props.items.map(()=>(1)))
    const [flag,setFlag] = useState(true)
    const [coupon,setCoupon] = useState(1);
   
    const changeCounter = (val,index)=>{

 
        let temp = counterList.map((e,i)=>{
            if(i==index)
                e = val.target.value
            return e
        })

        setCounterList([...temp])


    }

   
    const serviceSum =()=>{
       return Number((sum() / 10).toFixed(1));
      
    }

    const sum = ()=>{

        let sum = 0
        props.items.forEach((element,i) => {
            sum+=Number(element.price)*Number(counterList[i])     
        });

        if(coupon == '150' || coupon == '160' || coupon == '170'){
            sum *= 0.8;
        }

        return Number(sum.toFixed(1))
    }

    const show=()=>{
        if(flag){
            return(
                <div>
                <div className='row mainTitle' >
                    <div className='col-6'>
                        Product / Quantity
                    </div>
                    <div className='col-6'>Price</div>
                </div>
            
                
            
                {props.items.map((item,index)=>(
                    <div className='row'>
                        <div className='col-6'><div><label htmlFor="">{item.title}</label><br />
                        <input onChange={(val)=>changeCounter(val,index)} index={index} type="number" defaultValue='1' min='1' max='2'  />
                        </div></div>
                        <div className='col-6'>{item.price * counterList[index]}</div>
                        

                    </div>
                ))}
                    <div className='row'>
                    <div className='col-6'>
                        {/* <img style={{width:'100px'}} src="https://svcollege.co.il/wp-content/uploads/2020/08/header-logo.png" alt="" /> */}
                    </div>
                    <div className='col-6'>
                        <label>Subtotal: {sum() + '$'}</label><br />
                        <label>Service: {serviceSum() + '$'}</label> 
                    </div>
                    <div className='col-6' style={{backgroundColor:'lightgray'}}>
                        <label>Coupon No. </label>
                        <input onChange={(val)=>{setCoupon(val.target.value)}} placeholder='XXX' maxLength='3' type="text" />
                    </div>
                    <div className='col-6' style={{backgroundColor:'lightgray'}}>
                        {coupon == 150 || coupon == 160 || coupon == 170 ? <span style={{color:'green'}}>&#10003;</span> : null}
                    </div>
                    <div className='col-6' style={{backgroundColor:'lightgray'}}>
                        <label>table No. </label>
                        <input onChange={(val)=>{setTableNumber(val.target.value)}} defaultValue='1' min='1' max='99' type="number" />
                    </div>
                    <div className='col-6' style={{backgroundColor:'lightgray'}}>
                        Total: {(sum() + (sum()/10))+'$'}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <button onClick={()=>{setFlag(false)}} className='btn btn-primary'>Send</button>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-primary' onClick={()=>{props.closePopup(false)}}>Back To Menu</button>
                    </div>
                </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h3> Your order has been successfully received </h3>

                    <h2> Total: {sum()}$ </h2>
                    <h3>Table No {tableNumber}</h3>
                    <h4>Your order will arrive to your table in ...</h4>
                    <h2>  <Countdown date={Date.now() + 600000} /></h2>
                    <div className='col-12'>
                        <button className='btn btn-primary' onClick={()=>{setFlag(true)}}>Cancel</button>
                    </div>
                </div>
            )
        }
       
    }

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>SVBurger Summary</h1>
                    </div>
                    {show()}
                </div>
                </div>

            </div>
        </div>
    )
}








  
  

  