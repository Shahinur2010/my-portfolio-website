import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j12cs0k', 'template_9s8skzr', form.current, 'RDI1MWmAhRNUbESOs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <h2 className="font-bold text-center text-3xl my-10">Contact Information</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;