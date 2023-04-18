const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema(
  {
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //   },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    },
    comment: {
      type: String
    }
  }
//   ,
//   {
//     timestamps: true,
//   }
)

module.exports = mongoose.model('Comment', commentSchema)
