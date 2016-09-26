'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Tab widget.
 *
 * == How to use a Tab Widget in a component:
 *  See Tabs component
 *
 * @class Tab
 * @constructor
 */
var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

      /**
       * Tracks if the tab is a valid state
       *
       * @property isValid
       * @type {Boolean}
       */
      isValid: true
    }, _this.setValidity = function (valid) {
      _this.context.tabs.changeValidity(_this.props.tabId, valid);
      _this.setState({ isValid: valid });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'getChildContext',


    /**
     * Returns tab object to context children.
     *
     * @method getChildContext
     */
    value: function getChildContext() {
      return {
        tab: {
          setValidity: this.setValidity
        }
      };
    }

    /**
     * Sets valid state to passed param
     * It notifies the parent context of the change
     * and sets the current valid state to the new value
     *
     * @method setValidity
     * @param {Boolean} valid updates validity of this tab
     */

  }, {
    key: 'render',


    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.mainClasses },
        this.props.children
      );
    }
  }, {
    key: 'mainClasses',


    /**
     * Classes to be applied to the single tab component
     *
     * @method mainClasses Main Class getter
     */
    get: function get() {
      var classes = this.props.className || '';

      if (!this.state.isValid) {
        classes += ' carbon-tab--errors';
      }

      return 'carbon-tab ' + classes;
    }
  }]);

  return Tab;
}(_react2.default.Component);

Tab.propTypes = {
  /**
   * Visible title in tabs header
   * Consumed within tabs component
   *
   * @property title
   * @type {String}
   *
   */
  title: _react2.default.PropTypes.string.isRequired,

  /**
   * id to identify the tab within the component
   * used when validating and switching tabs
   *
   * @property tabId
   * @type {String}
   */
  tabId: _react2.default.PropTypes.string.isRequired
};
Tab.contextTypes = {

  /**
   * Defines what contexts are available to this tab componenet
   * https://facebook.github.io/react/docs/context.html
   *
   * @property tabs
   * @type {Object}
   */
  tabs: _react2.default.PropTypes.object
};
Tab.childContextTypes = {

  /**
   * Defines a context object for context children of this tab component.
   * https://facebook.github.io/react/docs/context.html
   *
   * @property tab
   * @type {Object}
   */
  tab: _react2.default.PropTypes.object
};
exports.default = Tab;