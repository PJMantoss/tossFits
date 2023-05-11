import { text, select, integer } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            }
        }),
        status: select({
            options: [
                {label: 'Draft', value: 'Draft'},
                {label: 'Available', value: 'AVAILABLE'},
                {label: 'Unavailable', value: 'UNAVAILABLE'},
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: { fieldMode: 'hidden' }
            },
        }),
        price: integer(),
    }
});