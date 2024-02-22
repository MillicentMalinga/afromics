import React from 'react'

function ContactUs() {
  return (
    <div className='bg-blue-gray-50 mx-auto w-4/5 pb-32'>
      <p className="font-body-plex text-2xl text-left">
        Join Our Newsletter
      </p>
      <p className="font-body-plex text-sm mb-4 text-left">
        Stay up to date with the latest news and updates.
      </p>
      <form className="flex flex-row gap-0">
        <input type="email" placeholder="Your email" className="font-body-plex bg-white p-2 w-1/2" />
        <button className="bg-blue-gray-900 text-white font-body-plex p-2 hover:border-none">Subscribe</button>
</form>
    </div>
  )
}

export default ContactUs