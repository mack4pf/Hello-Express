const express = require('express');
const ImageKit = require('imagekit');
const cors = require('cors');
const app = express();

app.use(cors());

// ⬇️ REPLACE THESE WITH YOUR IMAGEKIT KEYS
const imagekit = new ImageKit({
  publicKey: "public_N/wlvvAA07/VjEUW3lMAZISxVdw=",
  privateKey: "private_vQb2cLbaBiCYtKi+aB8ti2vdubE=",  // From ImageKit dashboard
  urlEndpoint: "https://ik.imagekit.io/immiplanner"
});

// This creates secure upload tokens
app.get('/auth', (req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Auth server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});