import React, { useEffect } from 'react'
import { useCart } from './CartsContext'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
    const {cart} = useCart()
    const navigate = useNavigate()
    const {mode} = useCart()
    const {removeAllCart} = useCart()
    const {toggleName} = useCart()


  return (
    <>
      {cart.length == 0 ? 
      
      <div className='w-[85%] mx-auto text-center mt-[10vh]'>

      <h1 className='text-2xl'>You haven't ordered anything yet</h1> 
      </div>
      
      : 
      
     <div className={`w-[85%] mx-auto ${mode ?  "text-white" : "text-black"}`}>
        <h1 className='py-2 px-4 text-2xl'>Your Orders </h1>
       {  cart.map((element) => 
       {
           return (
               <>
                <div className={`w-[100%] ${mode ? "text-black" : "text-black"} shadow-md lg:flex-row md:flex-row mx-auto border bg-gray-200  flex gap-3 py-3 px-4 rounded-md my-4 items-center justify-around`}>
         
         <img src={element.indexImage} className='w-[4rem]' alt={element.indexImage} />

         <h1 className='text-xs'>{element.productName}</h1>

         <div className='flex items-center'>
         <span class="material-symbols-outlined">
          currency_rupee
          </span>
          <p className='text-xs'>

             { new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(
               element.price[0])
              }
              </p>
          </div>

          <div>
      </div>

      </div>
                </>
            )
        })

       }
    
    <div className='w-[85%] py-2 mx-auto text-end'>
        <h1 className='text-xl mt-2'>Total Items : { cart.length}</h1>
        <button onClick={() => 
        {
            confirm("You Order has been Booked")
            navigate("/")
            removeAllCart()
        }} className='bg-orange-800 px-2 py-2 text-sm mt-3 rounded-md active:scale-90 text-white'>Book an Order</button>
    </div>
    </div>

} 
    </>
  )
}

export default Orders
