const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swaggerConfig');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api', tokenRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
