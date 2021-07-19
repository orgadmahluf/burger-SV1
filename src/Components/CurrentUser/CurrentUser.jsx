import React,{useState} from 'react'
import { useAuth } from "../../AuthContext"
import { useHistory } from "react-router-dom"
import Product from "../Product/Product"
import Payment from '../Payment/Payment'
import './CurrentUser.css'
import HamburgerImg4 from '../BackgroundImages/HamburgerImg12.jpg'


export default function CurrentUser() {
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [show,setShow]=useState(true)
    const [showPayment,setShowPayment] = useState(false)
    const [shoopingCart,setShoopingCart] = useState([])
    const [permision,setPermision] = useState(true)

    const products = [
    {title:'Combo Meal',count:'1', info:'Burger + Drink',price:'59',src:'https://st.depositphotos.com/1004059/2748/v/950/depositphotos_27488437-stock-illustration-fast-food.jpg'},
    {title:'Kids Meal',count:'1', info:'Chicken + Drink',price:'39',src:'https://st2.depositphotos.com/5739646/11649/v/950/depositphotos_116498516-stock-illustration-kids-restaurant-menu-cardboard-character.jpg'},
    {title:'Burger',count:'1', info:'Burger 220',price:'45',src:'https://image.freepik.com/free-vector/hamburger-cheeseburger-cartoon-icon_202271-1154.jpg'},
    {title:'Vegan',count:'1', info:'Beyond Vegan Burger',price:'45',src:'https://st2.depositphotos.com/5739646/11444/v/950/depositphotos_114446346-stock-illustration-kids-restaurant-menu-cardboard-character.jpg'},
    {title:'Sides',count:'1', info:'Fries',price:'12',src:'https://st2.depositphotos.com/5739646/11444/v/950/depositphotos_114446306-stock-illustration-kids-restaurant-menu-cardboard-character.jpg'}]


    async function handleLogout() {
      try {
        await logout()
        history.push("/HomePage")
      } catch {
        alert("error")
      }
    }

    const addProduct = (index)=>{

      if(shoopingCart.length < 3){
        shoopingCart.push(products[index])
        if(shoopingCart.length == 1){
          setShow(false)
        }
        setShoopingCart([...shoopingCart])
        setPermision(true)
      }
      else{
        setPermision(false)
      }
      
    }
    
    const deleteProduct = (index)=>{

      let newShoopingCart = shoopingCart.filter((item)=>item.title!==products[index].title)
      if(newShoopingCart.length == 0){
        setShow(true)
      }
      setShoopingCart([...newShoopingCart])
      setPermision(true)
    }

    return (
        <div className='card3 text-center' style={{backgroundImage: `url(${HamburgerImg4})`}}>

            
          <strong>Email:</strong> {currentUser.email}
          <div className='productsMain'>
          {products.map((item,index)=>{
            return <Product permision={permision} key={index} add={addProduct} delete={deleteProduct} title={item.title} info={item.info} price={item.price} src={item.src} index={index}/>
          })}
          </div>
          <button className='btn btn-primary' variant="link" onClick={handleLogout}> Log out </button>
          <button className='btn btn-primary' disabled={show} onClick={()=>{setShowPayment(true)}}> Reserve </button>
          {showPayment == true?<Payment closePopup={setShowPayment} items={shoopingCart} />:null}
        </div>
    )
}




