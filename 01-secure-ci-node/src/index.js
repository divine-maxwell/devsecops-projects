// Simple Express API for DevSecOps demo
const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'secure-ci-node' }));
app.get('/todos', (req, res) => res.json([
  { id: 1, title: 'learn devsecops' },
  { id: 2, title: 'add CI scans' }
]));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));

