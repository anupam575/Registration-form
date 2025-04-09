const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { name, email, password, number } = req.body;

    // Simple validation
    if (!name || !email || !password || !number) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format!' });
    }

    if (!numberRegex.test(number)) {
        return res.status(400).json({ message: 'Invalid phone number!' });
    }

    // Mock DB Success
    return res.status(200).json({ message: 'Registered successfully!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
