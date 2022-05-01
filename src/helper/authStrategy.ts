// @ts-ignore

import { CONFIG } from "../config/environment";

// import * as JwtCookieComboStrategy from 'passport-jwt-cookiecombo';
const JwtCookieComboStrategy = require('passport-jwt-cookiecombo').strategy;
export const authStrategy = new JwtCookieComboStrategy({
    secretOrPublicKey: CONFIG.jwt.secret,
    jwtVerifyOptions: CONFIG.jwt.option,
    passReqToCallback: false

})
