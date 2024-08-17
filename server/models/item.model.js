import {model, Schema} from 'mongoose';
const ItemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: [true, "Item name is required!"],
            minlength: [3, "Item name must be at least 3 characters long!"],
            maxlength: [20, "Item name must be less than 20 characters long"]
        },
        timestamp: {
            type: Date,
            required: [true, "Date required!"],
        },
        location: {
            type: String,
            required: [true, "Location is required!"],
        },
        markItem: {
            type: String,
            required: [true, "markItem is required!"],
        },
        description: {
            type: String,
            required: [true, "Description is required!"],
        },
        image: {
            type: String,
        },
        contact: {
            type: String,
        },
    },
    { timestamps: true }
);
const Item = model("Item", ItemSchema);
export default Item;
