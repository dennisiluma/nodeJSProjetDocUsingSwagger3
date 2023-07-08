const express = require('express');
const router = express.Router();


const persons = [
  { id: 1, name: 'Mike', age: 10 },
  { id: 2, name: 'James', age: 15 },
  { id: 3, name: 'Mary', age: 23 },
  { id: 4, name: 'Souvik', age: 34 },
]

/**
 * @swagger
 * /persons/all:
 *   get:
 *     summary: Get all persons.
 *     responses:
 *       '200':
 *         description: Returns an array of persons.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get('/all', (req, res) => {
  res.json(persons);
});

/**
 * @swagger
 * /persons/single:
 *   get:
 *     summary: Get a single person by ID.
 *     parameters:
 *       - name: id
 *         in: query
 *         description: ID of the person.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Returns a single person object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 */
router.get('/single', (req, res) => {
  const id = parseInt(req.query.id);
  const person = persons.find((p) => p.id === id);
  res.json(person);
});

/**
 * @swagger
 * /persons/save:
 *   post:
 *     summary: Save a person.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       '200':
 *         description: Successfully received person.
 */
router.post('/save', (req, res) => {
  const { id, name, age } = req.body;
  const newPerson = { id, name, age };
  persons.push(newPerson);
  res.send('Successfully Received Person');
});

module.exports = router;
