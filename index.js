/**
 *
 * Created by Yuriy Bushev <bushevuv@gmail.com> on 22/09/2016.
 */

'use strict';

/**
 * User model instance
 */
const UserModel = require('./models/user');

/**
 * Mongoose ODM
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs-test-project');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {

    console.log(`we're connected!`);

    iterateCollectionAndUpdateGender();
});

function iterateCollectionAndUpdateGender() {

    // TODO
}