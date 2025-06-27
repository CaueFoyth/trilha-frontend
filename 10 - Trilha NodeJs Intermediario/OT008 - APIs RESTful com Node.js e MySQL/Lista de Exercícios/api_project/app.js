const express = require('express');
const app = express();
const recordRoutes = require('./routes/recordRoutes');
const logger = require('./middleware/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(logger);
app.use('/records', recordRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
