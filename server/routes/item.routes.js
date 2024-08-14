import { Router } from "express";
import { createItem, getOneItem, getAllItem, getItemByMisplacedDate, updateOneItem, deleteOneItem } from "../controllers/item.controller.js"

const router = Router()

router.route('/items')
    .get( getAllItem )
    .post( createItem )

// router.route('/items/misplacedDate')

router.route('/items/:id')
    .get( getOneItem )
    .put( updateOneItem )
    .delete(deleteOneItem)


export default router