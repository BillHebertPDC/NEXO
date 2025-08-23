import { createApp } from './src/app/app.js';
import 'dotenv/config';
const port = process.env.PORT;


createApp().listen(port, () => {
  console.log(`http://localhost:${port}`);
});
