const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

const projectRouters = require('./routes/projectRoutes');
app.use('/api/projects',projectRouters);

const contactRoutes = require("./routes/Contact");
app.use("/api/contact", contactRoutes);

app.get('/', (req, res) => res.send('Portfolio API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
