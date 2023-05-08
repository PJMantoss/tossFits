import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-toss-fits';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 365, // How long a user should stay signed-in
    secret: process.env.COOKIE_SECRET,
}