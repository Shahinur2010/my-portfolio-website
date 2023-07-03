import { useRef } from 'react';
import emailjs from 'emailjs-com';
import useTitle from '../../hooks/useTitle';

const Contact = () => {
    useTitle('Contact')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_9u4vmx7',
                'template_57rtkrk',
                form.current,
                'DonkZk5-UoFlLy40O'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className='my-5' id="contact">
            <h2 className="font-bold my-8 text-center text-3xl p-5">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="hero my-8">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body bg-blue-100 rounded-xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="from_name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="from_email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Message</span>
                                </label>
                                <textarea type="text" placeholder="message" name="message" rows="8" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 btn btn-primary">
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
