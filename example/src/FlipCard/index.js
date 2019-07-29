/* eslint-disable */
import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Checkbox component.
 */
var FlipCard = /** @class */ (function (_super) {
    __extends(FlipCard, _super);
    function FlipCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
        };
        /**
         * Handler for open/close card.
         */
        _this.handleChange = function () {
            _this.setState({
                isOpen: !_this.state.isOpen,
            });
        };
        _this.state = {
            isOpen: Boolean(props.forceOpen),
        };
        return _this;
    }
    FlipCard.prototype.render = function () {
        var _a = this.props, caption = _a.caption, children = _a.children, height = _a.height, width = _a.width;
        var isOpen = this.state.isOpen;
        var style = {};
        if (height) {
            style.height = height;
        }
        if (width) {
            style.width = width;
        }
        return (React.createElement("div", { className: "flip-card " + (isOpen ? 'm-open' : ''), style: style },
            React.createElement("div", { className: "flip-card__inner" },
                React.createElement("div", { className: "flip-card__front", onClick: this.handleChange },
                    React.createElement("div", { className: "flip-card__expand" }),
                    React.createElement("div", { className: "flip-card__caption" }, caption)),
                React.createElement("div", { className: "flip-card__back" },
                    React.createElement("div", { className: "flip-card__close", onClick: this.handleChange }),
                    React.createElement("div", { className: "flip-card__text" }, children)))));
    };
    FlipCard.displayName = 'FlipCard';
    return FlipCard;
}(React.Component));

export { FlipCard };
