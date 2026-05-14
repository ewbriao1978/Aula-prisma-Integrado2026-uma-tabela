const express = require('express');
const myRoutes = require('./routes/myRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(myRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});