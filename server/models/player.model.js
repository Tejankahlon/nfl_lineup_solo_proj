const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [7, "must have more than 6 characters (First & Last name)"]
    }
}, {timestamps:true});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
