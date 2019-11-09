const diabetesModel=require("../model/diabetesModel");
//request
module.exports.createForm = async (req, res) => {
    // post
    // console.log(req.body);
    // var newObj=new planModel({})
    // newObj.save();
    try {
      var result = await diabetesModel.create(req.body);
      res.status(201).json({
        ans: result
      });
    } catch (err) {
      // console.log(err);
      res.status(401).json({
        status: err
      });
    }
  };