import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg-font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText />
            Email me for jobs
            </h3>
            <p className='text-primary/75 text-base mb-4 '>Send your email to me and please subscribe my portal for latest and earlier updates and you are the one to get notify if I post a job.Please subscribe my portal..</p>

             <div className='w-full space-y-4'>
                <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus-within:outline-none'/>
                <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus-within:outline-none bg-green-500 text-white cursor-pointer font-semibold '/>
             </div>
      </div>
      {/* second part */}
      <div className='mt-20'>
        <h3 className='text-lg-font-bold mb-2 flex items-center gap-2'>
            <FaRocket />
            Get noticed faster
            </h3>
            <p className='text-primary/75 text-base mb-4 '>If you subscribe my portal you can get noticed faster and we send you our latest jobs to you then you can apply easily.</p>

             <div className='w-full space-y-4'>
                
                <input type="submit" value={"Upload-your resume"} className='w-full block py-2 pl-3 border focus-within:outline-none bg-green-500 text-white cursor-pointer font-semibold '/>
             </div>
      </div>
    </div>
  )
}

export default NewsLetter
