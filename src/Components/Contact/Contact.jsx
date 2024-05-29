import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "feed0a3e-cdf7-4e2f-aaf9-441bcfdd070c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully:)");
            alert(data.message);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
  return (
    <div className='contact' id='contact'>
        <div className="contactHeader">
            <h1>CONTACT</h1>
        </div>

        <div className="contact-section" data-aos='fade-up' data-aos-easing='ease-in-out'>
            <div className='contact-left'>

            <h3>Let's connect!</h3>

                <div className="contact-details">
                    <div className="contact-detail">
                        <img className='contact-icon' src='/src/assets/mail.png' alt='email'/><p>jelijreid27@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img className='contact-icon' src='/src/assets/phone.png' alt='phone'/><p>(601)-938-2644</p>
                    </div>
                    <div className="contact-detail">
                    <img className='contact-icon' src='/src/assets/linkedin.png' alt='linkedin'/><a className='linkedin-link' href='https://www.linkedin.com/in/jude-reid-300596252/' target='_blank'><p>Jude Reid | LinkedIn</p></a>
                    </div>

                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>

        
    </div>

    
  )
}

export default Contact