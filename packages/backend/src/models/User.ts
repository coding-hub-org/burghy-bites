import mongoose, { Schema } from 'mongoose';

export const UsersSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name field is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    // imageUrl: {
    //     type: String,
    // },
    // imageID: {
    //     type: String,
    // },
    // reviews: [Review.schema],
});

export const User = mongoose.model('user', UsersSchema);