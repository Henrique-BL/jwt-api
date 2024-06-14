const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

const generateToken = (req, res) => {
  const messages = [
    'Hello, World!',
    'Welcome to the API',
    'JWT Token generated',
    'Have a great day!',
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const token = jwt.sign({ message }, secretKey, { expiresIn: '1h' });
  res.json({ token });
};

const decodeToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    res.json({ message: decoded.message });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
