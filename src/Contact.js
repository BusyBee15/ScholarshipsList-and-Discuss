import React from 'react'
import './Contact.css'

function Contact() {
  return (
        <article class="contact-form">
        
          <h3>contact us</h3>
        
          <form action="https://formspree.io/f/mbjerdll" method="POST">
            <div class="form-group">
              {/* <!-- inputs --> */}
              <input
                type="text"
                placeholder="name"
                class="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                class="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                class="form-control"
                rows="5"
              ></textarea>
            </div>
            {/* <!-- button --> */}
            <button type="submit" class="btn submit-btn">submit</button>
          </form>
        </article>
 

  )
}

export default Contact