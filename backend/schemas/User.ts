import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from "@keystone-next/fields";
import { CartItem } from "./Cart";

export const User = list({
    // access
    // ui

    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password({ isRequired: true }),
        cart: relationship({
            ref: 'CartItem.user',
            many: true,
            ui: {}
        }),
        // Add roles, cart and orders
    }
});