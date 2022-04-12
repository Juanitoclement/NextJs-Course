import { useRef } from "react";

function NewsletterPage() {
    const emailRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault();

        const emailVal = emailRef.current.value
        console.log('helo submit');

        fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({email: emailVal}),
            headers: {
                'Content-Type': 'application/json'
            } 
        }).then(res => res.json()).then(res => {
            console.log('helo fetch newsletter', res);
        })
    }

    return (
        <div>
            <h1>The NewsletterPage</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <input
                        type='email'
                        placeholder="email"
                        ref={emailRef}
                    />
                    <button>submit</button>
                </div>
            </form>

        </div>
    )
}

export default NewsletterPage;