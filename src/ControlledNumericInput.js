import React, { PropTypes, Component } from 'react';

export default class ControlledNumericInput extends Component {

    static propTypes = {
        className: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        value: PropTypes.any,
        valueList: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        step: 10,
        value: 0,
        valueList: [],
        onChange: () => {},
    };

    onStepUp = () => {
        const { step, value, onChange } = this.props;
        const newValue = +value + step;
        onChange({ target: { value: newValue } });
    }

    onStepDown = () => {
        const { step, value, onChange } = this.props;
        const newValue = +value - step;
        onChange({ target: { value: newValue } });
    }

    render() {
        const { className, step, min, max, value, valueList, onChange } = this.props;

        return (
            <div className={className}>
                <button className="btn-flat step-down" onClick={this.onStepDown}>&ndash;</button>
                <input
                    type="number"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    list="values"
                    onChange={onChange}
                />
                <button className="btn-flat step-up" onClick={this.onStepUp}>+</button>
                <datalist id="values">
                    {valueList.map(x =>
                        <option key={x} value={x} />
                    )}
                </datalist>
            </div>
        );
    }
}
