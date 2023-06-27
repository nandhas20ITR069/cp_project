const Product = require('../model/productModel');
const Tirupur = require('../model/trippurModel');
const Erode = require('../model/erodeModel');
const Coimbatore = require('../model/coimbatoreModel');
const Namakal = require('../model/namakkalModel');
const Trichy = require('../model/trichyModel');
const Pollachi = require('../model/pollachiModel');

var nodemailer = require('nodemailer');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shwethachandran06@gmail.com',
        pass: 'eddgqauvujenfaag'
    }
});

var mailOptions = {
    from: 'shwethachandran06@gmail.com',
    to: 'shwethachandran06@gmail.com',
    subject: 'Alert !! Stocks are getting low !!',
    text: 'Please update the product'   
};



exports.CreateProduct = async (req, res) => {
    console.log(req.body)
    const { image, name, description, price,  stocks } = req.body;

    const product = new Erode({
        image,
        name,
        description,
        price,
        stocks,

    })
    product.save();
    res.send({ message: "Successfull Register" });
}

// exports.CreateTirupurProduct = async (req, res) => {
//     console.log(req.body)
//     const { image, name, description, price, pid, stocks } = req.body;

//     const tirupur = new Tirupur({
//         image,
//         name,
//         pid,
//         description,
//         price,
//         stocks,
//         district

//     })
//     tirupur.save();
//     res.send({ message: "Successfull Register" })
// }

// exports.CreateErodeProduct = async (req, res) => {
//     console.log(req.body)
//     const { image, name, description, price, pid, stocks } = req.body;

//     const erode = new Erode({
//         image,
//         name,
//         pid,
//         description,
//         price,
//         stocks,
//         district

//     })
//     erode.save();
//     res.send({ message: "Successfull Register" })
// }

// exports.CreateCoimbatoreProduct = async (req, res) => {
//     console.log(req.body)
//     const { image, name, description, price, pid, stocks } = req.body;

//     const coimbatore = new Coimbatore({
//         image,
//         name,
//         pid,
//         description,
//         price,
//         stocks,
//         district

//     })
//     coimbatore.save();
//     res.send({ message: "Successfull Register" })
// }

// exports.CreateTrichyProduct = async (req, res) => {
//     console.log(req.body)
//     const { image, name, description, price, pid, stocks } = req.body;

//     const trichy = new Trichy({
//         image,
//         name,
//         pid,
//         description,
//         price,
//         stocks,
//         district

//     })
//     trichy.save();
//     res.send({ message: "Successfull Register" })
// }

// exports.CreateNamakkalProduct = async (req, res) => {
//     console.log(req.body)
//     const { image, name, description, price, pid, stocks } = req.body;

//     const namakal = new Namakal({
//         image,
//         name,
//         pid,
//         description,
//         price,
//         stocks,
//         district

//     })
//     namakal.save();
//     res.send({ message: "Successfull Register" })
// }


// exports.CreatePollachiProduct = async (req, res) => {
//     console.log(req.body)
//     const { image, name, description, price, pid, stocks } = req.body;

//     const pollachi = new Pollachi({
//         image,
//         name,
//         pid,
//         description,
//         price,
//         stocks,
//         district

//     })
//     pollachi.save();
//     res.send({ message: "Successfull Register" })
// }


exports.ListProduct = async (req, res) => {
    const data = await Product.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }

    } else {
        res.send(err);
    }
}

exports.ListErodeProduct = async (req, res) => {
    const data = await Erode.find({});
    // res.send(data);
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response)
                    }
                });
                break;
            }
        }

    } else {
        // console.log()
        res.send(err);

    }
}

exports.ListTirupurProduct = async (req, res) => {
    const data = await Tirupur.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }
    } else {
        res.send(err);
    }
}

exports.ListTrichyProduct = async (req, res) => {
    const data = await Trichy.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }

    } else {
        res.send(err);
    }
}

exports.ListCoimbatoreProduct = async (req, res) => {
    const data = await Coimbatore.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }

    } else {
        res.send(err);
    }
}

exports.ListNamakalProduct = async (req, res) => {
    const data = await Namakal.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }

    } else {
        res.send(err);
    }
}

exports.ListPollachiProduct = async (req, res) => {
    const data = await Pollachi.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }

    } else {
        res.send(err);
    }
}


exports.DeleteProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Product.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Product.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Product.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}



exports.DeleteErodeProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Erode.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateErodeProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks,_id } = req.body;
        const value = { name, price, description, image, stocks};
        console.log(_id);
        await Erode.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateErodeStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Erode.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}


exports.DeleteCoimbatoreProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Coimbatore.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateCoimbatoreProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Coimbatore.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateCoimbatoreStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Coimbatore.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}



exports.DeleteTrichyProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Trichy.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateTrichyProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Trichy.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateTrichyStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Trichy.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}


exports.DeleteTirupurProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Tirupur.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateTirupurProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Tirupur.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateTirupurStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Tirupur.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.DeleteNamakalProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Namakal.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateNamakalProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Namakal.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateNamakalStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Namakal.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}


exports.DeletePollachiProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Pollachi.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdatePollachiProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Pollachi.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdatePollachiStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Pollachi.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}


