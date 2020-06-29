import { createConnection } from 'typeorm';

(async function run() {
  try {
    await createConnection();
    console.log('✅ Database is successfully connected');
  } catch (error) {
    console.log('❌ Database connection error:', error);
  }
})();
