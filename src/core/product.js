export class Product {
    constructor(
        id,
        shortName,
        name,
        description,
        price = null,
        images = [],
        stock = null,
    ) {
        this._id = id;
        this._shortName = shortName;
        this._name = name;
        this._description = description;
        this._price = price;
        this._images = images;
        this._stock = stock;
    }

    get Id() {
        return this._id;
    }

    get ShortName() {
        return this._shortName;
    }

    get Name() {
        return this._name;
    }

    get Description() {
        return this._description;
    }

    get Price() {
        return this._price;
    }

    get Images() {
        return this._images;
    }

    get Stock() {
        return this._stock;
    }
}

export default Product;