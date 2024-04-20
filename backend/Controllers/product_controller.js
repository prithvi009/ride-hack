import Product from '../Model/Product.js'


export const newCollections = async (req, res) => {
    let newcollections = await Product.find({});
    let mycollection = newcollections.slice(0, 8);
    res.json({ mycollection })
}

export const getProducts = async (req, res) => {
    let products = await Product.find({})
    res.json({ products })
}

export const addProduct = async (req, res) => {
    const Products = await Product.find({});
    let id;
    if (Products.length > 0) {
        const last_document = Products[Products.length - 1];
        id = last_document.id + 1;

    }
    else id = 1;

    try {
        req.body.id = id;
        const prod = await Product.create(req.body)
        res.status(201).json({ prod })
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
}


export const removeProduct = async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    res.json({ msg: "Deletd successfully bro" })
}

export const updateProduct = async (req, res) => {
    const body = req.body;
    const product = await Product.findOneAndUpdate({ id: req.body.id }, req.body, { new: true, runValidators: true })
    if (!product) {
        res.json({ msg: "No data found" })
    }
    res.json({ product })
}