import Link from 'next/link'
import React from 'react'
 
const Button = ({href, children} ) => {
  return (
    <Link href={href} className='flex justify-center w-max items-center py-3 px-6 rounded-full bg-button text-[#F4F7FA] text-sm'>
      {children}
    </Link>
  )
}

export default Button;