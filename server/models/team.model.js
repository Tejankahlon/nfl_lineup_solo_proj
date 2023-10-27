const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    QB: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] }, 
    WR1: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    WR2: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    RB1: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    RB2: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    TE: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    WRT: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    K: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
    DEF: { type: String, required: [true, "Name is required"], minlength: [7, "Name must be 6 characters (First & Last)"] },
}, {timestamps:true});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
