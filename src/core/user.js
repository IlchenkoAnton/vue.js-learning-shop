class User {
    constructor(
        id,
        name,
        token,
    ) {
        this._id = id;
        this._name = name;
        this._token = token;
    }

    get Id() {
        return this._id;
    }

    get Name() {
        return this._name;
    }

    get Token() {
        return this._token;
    }

    getUserString() {
        return JSON.stringify({
            id: String(this.Id),
            name: String(this.Name),
            token: String(this.Token),
        });
    }
}

export default User;