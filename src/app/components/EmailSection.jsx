"use client"
import React,{useState} from 'react'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from 'next/image'  
import Link from 'next/link'
const EmailSection = () => {
    const [emailSubmitted,setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            subject : e.target.subject.value,
            message : e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata, 

        }
    const response = await fetch(endpoint,options);
    const result = await response.json();
    console.log(result);
    if (result.status === 200){
        alert('Message sent successfully');
        setEmailSubmitted(true);
        e.target.reset();
    }}
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative' id='contact'>
        <div className='absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through the form or via my social media channels.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href={"httpgithub.com/samarpanpdl/"}>
                    <Image src={GithubIcon} alt='GithubIcon'/>
                    
                </Link> 
                <Link href={"linkedin.com/aashutosh-poudel/"}>
                    <Image src={LinkedinIcon} alt='linkedIcon'/>
                    
                </Link>                
            </div>
        </div>
        <div>
            {emailSubmitted ? (
                <div className='text-white text-center'>
                    <h3 className='text-2xl font-bold mb-4'>Thank you for reaching out!</h3>
                    <p>I appreciate you contacting me. I will get back to you shortly!</p>
                </div>
            ) : (
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type='email' name='email' id='email' required placeholder='abc@gmail.com'/>
                </div>
                <div className='mb-6'>
                <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    name='subject' type='text' id='subject' required placeholder='Just saying hi'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Your message</label>
                    <textarea className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                       name='message' id='message' rows="4" required placeholder='Your message here...'></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    
            </form>)}

        </div>
    </section>
  )
}

export default EmailSection