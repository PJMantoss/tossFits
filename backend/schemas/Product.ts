import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { select } from '@keystone-next/fields';

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
    }
});