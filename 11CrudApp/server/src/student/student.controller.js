const Student = require("./student.schema")

const get = async(req, res) => {
    const students = await Student.find()
    res.status(200).json(studets)
}

const post = async (req, res) => {
    try {
        const student = new Student(req.body)
        await student.save()
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json(error)
    }
}

const update = async(req, res) => {
    try {
        const id = req.params.id
        const student = await Student.updateOne({_id:id},req.body)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json(error)
    }
}

const remove = async(req, res) => {
    try {
        const id = req.params.id
        const student = await Student.deleteOne({_id:id},req.body)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    get,
    post,
    update,
    remove
}