const express = require("express");
const router = express.Router();
const { User } = require('../models/user')


router.get(`/`, (req, res) => {
    const users = {
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel", "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ],
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    };
    res.send(users);

});

router.post(`/`, (req, res) => {
    var new_user = new User(req.body);

    new_user.save((err, results) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(results);
        }
    });

    res.send(new_user);

});

router.get(`/:id`, (req, res) => {
    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res
            .status(200)
            .json({ status: false, message: "Id is not a valid object Id" });

    const user = User.findById(req.params.id).then((data) => {
        if (data) {
            return res
                .status(200)
                .json({ status: true, message: "User was found", data: data });
        } else {
            return res
                .status(200)
                .json({ status: false, message: "User was NOT found" });
        }
    });
});

module.exports = router;