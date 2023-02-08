

const CartContainer = () => {





  
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$</span>
          </h4>
        </div>
        <button className='btn clear-btn'>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer