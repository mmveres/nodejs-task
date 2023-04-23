import express from 'express';
import bodyParser from 'body-parser';

interface User {
    id: number;
    name: string;
}

let users: User[] = [];

const app = express();
app.use(bodyParser.json());

app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).send('Name is required');
        return;
    }

    const user: User = { id: users.length + 1, name };
    users.push(user);
    res.send(user);
});

app.get('/users', (req, res) => {
    const result = users.map(({ id, name }) => ({ id, name }));
    res.send(result);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === Number(id));
    if (!user) {
        res.status(404).send('User not found');
        return;
    }
    const { name } = user;
    res.send({ id, name });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        res.status(400).send('Name is required');
        return;
    }
    const user = users.find(u => u.id === Number(id));
    if (!user) {
        res.status(404).send('User not found');
        return;
    }
    user.name = name;
    res.send(user);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === Number(id));
    if (index === -1) {
        res.status(404).send('User not found');
        return;
    }
    users.splice(index, 1);
    res.send({ message: 'User deleted' });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});