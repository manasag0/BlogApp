import React from 'react'

const Post = () => {
  return (
    <div className='lg:mx-[200px] flex justify-center'>
          <div className='flex flex-col lg:grid grid-cols-3 gap-3 mt-5'>
              <div className='lg:col-span-1'>
                  <img src="https://techcrunch.com/wp-content/uploads/2023/08/getty-photo-mosh-stalkerware.jpg?w=1390&crop=1" alt="texh img" className='col-span-1' />

              </div>
              <div className="lg:col-span-2">
                  <h1 className='font-bold  lg:text-[24px]'>
                      Big Tech's divisive 'personalization' attracts fresh call
                  </h1>
                  <p> <span className="text-gray-300 text-[15px] font-bold"> Manasa </span> <span className="inline text-gray-500 text-[12px]"><time>21-12-2023 01:08 PM IST</time></span></p>
                  <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam vitae, ea consequuntur ab omnis aliquam nulla quam adipisci inventore consequatur. Totam accusantium dicta amet iure natus, vitae dolore? Ea.</p>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Post
