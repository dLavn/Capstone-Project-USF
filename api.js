const express = require('express');
const { query } = require('./db');
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/users/:id/goals', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('SELECT * FROM goals WHERE user_id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users/:id/goals', async (req, res) => {
  const { id } = req.params;
  const { goal_name, description } = req.body;
  try {
    const result = await query(
      'INSERT INTO goals (user_id, goal_name, description) VALUES ($1, $2, $3) RETURNING *',
      [id, goal_name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/goals/:id', async (req, res) => {
  const { id } = req.params;
  const { is_completed, completed_at } = req.body;
  try {
    const result = await query(
      'UPDATE goals SET is_completed = $1, completed_at = $2 WHERE id = $3 RETURNING *',
      [is_completed, completed_at, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await query('DELETE FROM users WHERE id = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
