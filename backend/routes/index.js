2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
	
import express from "express";
 
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controlers/Products.js";
 
const router = express.Router();
 
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
 
export default router;