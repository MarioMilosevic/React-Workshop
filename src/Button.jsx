const Button = (children, {clickHandler}) => {
  return (
    <button onClick={clickHandler} className='px-4 py-2'>{children}</button>
  )
}

export default Button
