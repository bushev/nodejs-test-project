/**
 *
 * Created by Yuriy Bushev <bushevuv@gmail.com> on 22/09/2016.
 */

'use strict';

/**
 * Mongoose ODM
 */
const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {type: String}
});

let UserModel = mongoose.model('User', userSchema);

/**
 * Export model instance
 *
 * @type {Aggregate|*|Model}
 */
module.exports = UserModel;