import { cloudinaryImage } from "@keystone-next/cloudinary";
import { text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const cloudinary = {
    cloudName,
    apiKey,
    apiSecret
}

export const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary,
            label: 'Source',
        }),
        altText: text(),
    },
});