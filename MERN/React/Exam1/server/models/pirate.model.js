const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        
    },
    image: {
        type: String,
        required: [true, "Image Url is required"],
    },
    nrofTreasure: {
        type: Number,
        required: [true, "Nr of treasure"],
       
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch Phrase is required"],
       
    },
    crewPosition: {
        type: String,
        enum:["Captain","First Mate", "Quarter Master", "Boatswain","Powder Monkey"],
        required:[true,"Crew position is required"]
       
    },
    petLeg: {
        type: Boolean,
        default: false
    },
    eyePatch: {
        type: Boolean,
        default: false
    },
    hookHand: {
        type: Boolean,
        default: false
    },
  },

{ timestamps: true }
);
const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;
