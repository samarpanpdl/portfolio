"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
const UpSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12 place-self-center gap-8 lg:gap-16 py-16 '>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span>Hello, I am </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                        'Aashutosh',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Python Developer',
                        1000,
                        'Full Stack Developer',
                            1000,
                        'django Developer',
                            1000
                                    ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                <p className='text-[#ADB7BE] text-base lg:text-lg lg:text-xl mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti dolores architecto tempore aut neque, temporibus error molestiae quidem necessitatibus repudiandae minus? Excepturi pariatur hic error reiciendis id? Ullam, quo?
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mx-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mx-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>

            <div className='col-span-5'>
                <div className='rounded-full bg-[#181818] w-[500px] h-[500px] relative'>
                <Image src="/images/profile.jpg" alt="image" width={250} height={250} className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
                </div>
            </div>

        </div>
    </section>
  )
}

export default UpSection