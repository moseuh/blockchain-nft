import React from 'react'

function AvatarCard({ img, name, handle, gradient }) {
  return (
    <>
      {' '}
      <div className='w-full md:w-52  rounded-lg overflow-hidden border border-slate-400/10 pb-6 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5'>
        <div className='flex flex-col  '>
          {/* Gradient */}
          <div className={`h-24 ${gradient}`}></div>
          <div className='self-center -mt-12 mb-6'>
            <img
              src={img}
              alt=''
              className=' rounded-full bg-center object-cover w-24 h-24 overflow-hidden'
            />
          </div>
          {/* Avatar */}
          {/* <div className='rounded-full w-24 h-24 absolute left-[30%] overflow-hidden -top-3'>
            <img src={img} alt='' className='object-cover' />
          </div> */}
          {/* Content */}
          <div className='text-center '>
            <h3 className='text-xl'>{name}</h3>
            <p className='text-slate-400 text-sm'>{handle}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AvatarCard
