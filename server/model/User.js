// import mongoose from "mongoose";

// //userSchema already used in my Hotelfinder website
// const customerSchema = mongoose.Schema({
//     iss: {
//         type: String
//     },
//     nbf: {
//         type: Number
//     },
//     aud: {
//         type: String
//     },
//     sub: {
//         type: String,
//         required: true,
//         unique: true  // Ensure 'sub' is unique
//     },
//     email: {
//         type: String,
//         unique: true,  // Ensure 'email' is unique to avoid duplicates
//         sparse: true   // Allows for optional email without causing conflicts
//     },
//     email_verified: {
//         type: Boolean
//     },
//     azp: {
//         type: String
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     picture: {
//         type: String,
//         required: true
//     },
//     given_name: {
//         type: String
//     },
//     family_name: {
//         type: String
//     },
//     iat: {
//         type: Number
//     },
//     exp: {
//         type: Number
//     },
//     jti: {
//         type: String
//     }
// });

// const user = mongoose.model('customer',customerSchema);

// export default user;

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        required: true,
        unique: true  // Ensure 'sub' is unique
    },
    email: {
        type: String,
        unique: true,  // Ensure 'email' is unique to avoid duplicates
        sparse: true   // Allows for optional email without causing conflicts
    },
    email_verified: {
        type: Boolean
    },
    azp: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    }
});

const user = mongoose.model('user',userSchema);

export default user;