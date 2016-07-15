import React, { PropTypes, Component } from 'react';

export default class UncontrolledNumericInput extends Component {

    static propTypes = {
        className: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        defaultValue: PropTypes.any,
        valueList: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        step: 10,
        defaultValue: 0,
        valueList: [],
        onChange: () => {},
    };

    constructor(props) {
        super(props);
        this.currentValue = 0;
    }

    onInput = e => {
        this.currentValue = e.target.value;
        this.props.onChange(e);
    }

    onStepUp = () => {
        const { step, onChange } = this.props;
        const newValue = +this.currentValue + step;
        onChange({ target: { value: newValue } });
    }

    onStepDown = () => {
        const { step, onChange } = this.props;
        const newValue = +this.currentValue - step;
        onChange({ target: { value: newValue } });
    }

    render() {
        const { className, step, min, max, value, valueList } = this.props;

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
                    onChange={this.onInput}
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

