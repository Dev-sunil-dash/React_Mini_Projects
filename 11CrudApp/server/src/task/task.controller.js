const get = (req, res) => {
    res.send("get request")
}

const post = (req, res) => {
    res.send("post request")
}

const update = (req, res) => {
    res.send("update request")
}

const remove = (req, res) => {
    res.send("remove request")
}

module.exports = {
    get,
    post,
    update,
    remove
}