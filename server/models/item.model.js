import {model, Schema} from 'mongoose';
const ItemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: [true, "Item name is required!"],
            minlength: [3, "Item name must be at least 3 characters long!"],
            maxlength: [20, "Item name must be less than 20 characters long"]
        },
        misplacedDate: {
            type: Date,
            required: [true, "Misplaced date required!"],
            // min: [2, "Misplaced date must be at least 1 minutes!"]
        },
        location: {
            type: String,
            required: [true, "Misplaced location is required!"],
            minlength: [10, "Misplaced location must be at least 10 characters long!"],
        },
        discription: {
            type: String
        },
        image: {
            type: String
        },
        note: {
            type: String
        },
    },
    { timestamps: true }
);
const Item = model("Item", ItemSchema);
export default Item;
