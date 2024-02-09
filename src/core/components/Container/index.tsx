import { ReactNode } from 'react'

const Conatiner = ({children} : {children:ReactNode}) => {
  return (
    <div className='_container'>{children}</div>
  )
}

export default Conatiner