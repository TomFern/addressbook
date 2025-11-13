const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/person/:id', async (req, res, next) => {
    try {
        const person = await db.Person.findByPk(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json(person);
    } catch (err) {
        next(err);
    }
});

app.put('/person', async (req, res, next) => {
    try {
        const person = await db.Person.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            id: req.body.id
        });
        res.status(201).json(person);
    } catch (err) {
        next(err);
    }
});

app.delete('/person/:id', async (req, res, next) => {
    try {
        const deletedCount = await db.Person.destroy({
            where: {
                id: req.params.id
            }
        });
        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).send();
    } catch (err) {
        next(err);
    }
});

app.get('/all', async (req, res, next) => {
    try {
        const persons = await db.Person.findAll();
        res.status(200).json(persons);
    } catch (err) {
        next(err);
    }
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('app is running on port', server.address().port);
});

module.exports = app;
