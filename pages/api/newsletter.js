export default function handler(req, res) {
    if(req.method === 'POST') {
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')) {
            res.status(422).json({message: 'invalid format'})
            return;
        }

        console.log('helo world', userEmail)
        res.status(201).json({ message: 'Sign up success' })
    }
  }
  