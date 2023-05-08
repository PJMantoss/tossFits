import { list } from "@keystone-next/keystone/schema";

export const User = list({
    // access
    // ui

    fields: {
        name: text(),
    }
});