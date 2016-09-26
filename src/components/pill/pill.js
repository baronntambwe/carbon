import React from 'react';
import classNames from 'classnames';

/**
* A Pill widget.
*
* == How to use a Pill in a component:
*
* In your file:
*
*   import Pill from 'carbon/lib/components/pill'
*
* To render the Pill:
*
*   <Pill as='warning'>My warning text</Pill>
*
* Additionally you can pass optional props to the Pill component
*
*   as: Customizes the appearence of the pill changing the colour.
*       (see the 'iconColorSets' for possible values).
*
* @class Pill
* @constructor
*/
class Pill extends React.Component {

  static propTypes = {

    /**
     * Customizes the appearance through colour
     * (see the 'iconColorSets' for possible values)
     *
     * @property as
     * @type {String}
     * @default 'info'
     */
    as: React.PropTypes.string,

    fill: React.PropTypes.bool,

    /**
     * The text to display on the Pill
     *
     * @property children
     * @type {String}
     */
    children: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    as: 'info',
    fill: false
  }

  /**
   * Renders the component.
   *
   * @method render
   */
  render() {
    let { className, ...props } = this.props;

    className = classNames(
      'carbon-pill',
      className,
      'carbon-pill--' + this.props.as + (this.props.fill ? '--fill' : '--empty')
    );

    return(
      <span { ...props } className={ className }>
        {this.props.children}
      </span>
    );
  }
}

export default Pill;