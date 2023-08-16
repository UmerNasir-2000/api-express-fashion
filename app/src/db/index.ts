import { connect } from 'mongoose';

async function initDB() {
    try {
        const { connection: { db } } = await connect(process.env.MONGO_URI ?? '');
        console.log(`Connected to ${db.databaseName} database`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default initDB;