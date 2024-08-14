import Item from "../models/item.model.js";

//Add a item to the collection in our Mongo database using a POST HTTP Verb.
async function createItem(req, res) {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Retrieve all meals from the collection.
async function getAllItem(req, res) {
    try {
        const allItem = await Item.find();
        res.status(200).json(allItem);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Retrieve a single item from the collection.
async function getOneItem(req, res) {
    try {
        const foundItem = await Item.findById(req.params.id);
        res.status(200).json(foundItem);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
//Retrieve a item from the collection that has less than or equal to 60 dates misplacedDate
async function getItemByMisplacedDate(req, res, next) {
    try {
        const foundItem = await Item.find({ misplacedDate: {$lte: 60 }});
        res.status(200).json(foundItem);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Edit a item from the collection.
async function updateOneItem(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, options);
        res.status(200).json(updatedItem);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Delete a item from the collection.
async function deleteOneItem(req, res) {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedItem);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createItem,
    getOneItem,
    getAllItem,
    getItemByMisplacedDate,
    updateOneItem,
    deleteOneItem
};

