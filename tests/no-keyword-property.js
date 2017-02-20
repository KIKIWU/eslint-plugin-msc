/**
 * @fileoverview Avoid the use of reserved keyword as the property name.
 * @author kikiwu
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../rules/no-keyword-property"),
    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-keyword-property", rule, {
    valid: [
        {
            code: "valid",
            parserOptions: {ecmaVersion: 6}
        }
    ],
    invalid: [
        {
            class: "valid",
            null: {for: 6}
        }
    ]
});
