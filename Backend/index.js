const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/voting', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => {
        console.error('Kuch To gadbadh Hai', err);
        process.exit(1);
    });

const userSchema = new mongoose.Schema({
    officialEmail: String,
    studentID: String,
    name: String,
    course: String,
    universityRollno: String,
    password: String
});

const User = mongoose.model('Users', userSchema);

app.post('/register', (req, res) => {
    const { officialEmail, studentID, name, course, universityRollno, newPassword } = req.body;
    if (!officialEmail || !studentID || !name || !course || !universityRollno || !newPassword) {
        res.status(400).send({ message: 'Missing required fields' });
        return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
    const user = new User({ officialEmail, studentID, name, course, universityRollno, password: hashedPassword });
    user.save()
        .then(result => {
            res.send({ message: 'Registration successful' });
        })
        .catch(err => {
            res.status(500).send({ message: 'An Server Side Error Occured! Please Register Once Again' });
        });
});

app.post('/login', (req, res) => {
    const { Email, Password } = req.body;
    User.findOne({ Email })
        .then(user => {
            if (!user) {
                res.status(401).send({ message: 'Invalid email or password' });
                return;
            }
            const isPasswordValid = bcrypt.compareSync(Password, user.password);
            if (!isPasswordValid) {
                res.status(401).send({ message: 'Invalid email or password' });
                return;
            }
            res.send({ message: 'Login successful' });
        })
        .catch(err => {
            res.status(500).send({ message: 'Error logging in' });
        });
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});