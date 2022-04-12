import { useEffect } from "react";

function FeedbackPage() {

    const handleFetch = () => {
        fetch('/api/feedback',  {
            method: 'POST',
            body: JSON.stringify({
                email: 'abc',
                text: 'helo abc'
            }),
            headers: {
                'Content-Type': 'application/json'
            } 
        }).then(res => {
            console.log('helo data', res)
        });
    }
    
    return (
        <div>
            The FeedbackPage
            <button onClick={handleFetch}>fetch data</button>
        </div>
    )
}

export default FeedbackPage;