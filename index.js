/**
 * @fileoverview Avoid the use of reserved keyword as the property name
 * @author kikiwu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: {
        'no-keyword-property': require('./rules/no-keyword-property')
    },
    environments: {
        hfe: {
            globals: true
        }
    }

};



// import processors
module.exports.processors = {

    // add your processors here
};

