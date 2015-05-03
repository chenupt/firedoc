
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.


### File: `tests/input/charts/StackedAreaSeries.js`

```js
/**
 * StackedAreaSeries area fills to display data showing its contribution to a whole.
 *
 * @module charts
 * @class StackedAreaSeries
 * @constructor
 * @param {Object} config (optional) Configuration parameters for the Chart.
 * @extends AreaSeries
 * @uses StackingUtil
 */
Y.StackedAreaSeries = Y.Base.create("stackedAreaSeries", Y.AreaSeries, [Y.StackingUtil], {
    /**
     * @protected
     *
     * Calculates the coordinates for the series. Overrides base implementation.
     *
     * @method setAreaData
     */
    setAreaData: function()
    {   
        Y.StackedAreaSeries.superclass.setAreaData.apply(this);
        this._stackCoordinates.apply(this);
    },

    /**
     * @protected
     *
     * Draws the series
     *
     * @method drawSeries
     */
	drawSeries: function()
    {
        this.drawFill.apply(this, this._getStackedClosingPoints());
    }
}, {
    ATTRS: {
        /**
         * Read-only attribute indicating the type of series.
         *
         * @attribute type
         * @type String
         * @default stackedArea
         */
        type: {
            value:"stackedArea"
        }
    }
});

```