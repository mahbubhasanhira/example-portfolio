import './contact.scss';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder='Email'/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;