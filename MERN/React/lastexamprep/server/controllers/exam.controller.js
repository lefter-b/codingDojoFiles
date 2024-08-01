const Exam = require('../models/exam.model');

module.exports.findAll = (req, res) => {
    Exam.find()
        .then((response) => {
            res.json({ results: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findDrafts = (req, res) => {
    Exam.find({ draft: true })
        .then((response) => {
            res.json({ results: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findPosted = (req, res) => {
    Exam.find({ posted: true })
        .then((response) => {
            res.json({ results: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findArchive = (req, res) => {
    Exam.find({ archived: true })
        .then((response) => {
            res.json({ results: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneSingle = (req, res) => {
    Exam.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ result: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNew = (req, res) => {
    Exam.create(req.body)
        .then(newInfo => {
            res.json({ result: newInfo })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExisting = (req, res) => {
    Exam.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ pirate: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.changeToPosted = (req, res) => {
    Exam.findOneAndUpdate(      
        { _id: req.params.id },
        { posted: true, draft: false }
        
    )
        .then(updatedObject => {
            res.json({ result: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.changeToArchive = (req, res) => {
    Exam.findOneAndUpdate(
        { _id: req.params.id },
        { posted: false, archived: true }
       
    )
        .then(updatedObject => {
            res.json({ result: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.deleteAnExisting = (req, res) => {
    Exam.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
