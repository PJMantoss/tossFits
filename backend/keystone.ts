import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import 'dotenv/config';
import { insertSeedData } from './seed-data';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-toss-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 365, // How long a user should stay signed-in
    secret: process.env.COOKIE_SECRET,
    secureCookies: false
}

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // Add initial roles here
    },
});

export default withAuth(config({
    //@ts-ignore
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        // Add Data seeds here
        async onConnect(keystone) {
            console.log("Connected to the database");
            if(process.argv.includes("--seed-data")){
                await insertSeedData(keystone);
            }
        }
    },
    lists: createSchema({
        // schema items go in here
        User,
        Product,
        ProductImage,
    }),
    ui: {
        // Show the UI only for people who have passed the test
        isAccessAllowed: ({ session }) => {
            console.log({session});
            return !!session?.data;
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        // GraphQL Query
        User: 'id name email',
    })
}));