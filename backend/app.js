const express = require('express');
const cors = require('cors');

const santaRoutes = require('./routes/santaRoutes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));


app.use(express.json());
app.use('/api', santaRoutes);

app.get('/test', (req, res) => {
  res.json({ message: 'Backend is working' });
});


app.listen(3000, () => console.log('Server running on port 3000'));
