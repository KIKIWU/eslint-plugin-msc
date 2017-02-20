/**
 * @fileoverview Avoid the use of reserved keyword as the property name.
 * @author kikiwu
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        schema: []
    },

    create: function(context) {
        const keywords = require("../util/keywords");

        return {
            ObjectExpression: function (node) {
                if (!node.properties) {
                    return;
                }

                function checkForViolation(data) {
                    if (keywords.indexOf(data.key.name) > -1) {
                        context.report({
                            node: data,
                            message: "use keyword invalid:",
                            data: {
                                identifier: data.key.name
                            }
                        });
                    }
                }

                var propertiesLength = node.properties.length;
                for (var i = 0; i < propertiesLength; i++) {
                    checkForViolation(node.properties[i]);
                }
            },
            AssignmentExpression: function (node) {
                if (!node.left) {
                    return;
                }

                function checkExViolation(data) {
                    if (keywords.indexOf(data.left.property.name) > -1) {
                        context.report({
                            node: data,
                            message: "use keyword invalid:",
                            data: {
                                identifier: data
                            }
                        });
                    }
                }
                if(node.left && node.left.object && node.left.property) {
                    checkExViolation(node);
                }
            }
        };

    }
};