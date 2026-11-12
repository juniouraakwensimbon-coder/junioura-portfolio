
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio server running at: http://localhost:${PORT}`);
  console.log(`   Environment : ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Press Ctrl+C to stop\n`);
});
