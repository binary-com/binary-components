import React, { PropTypes, Component } from 'react';

const NumberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export default class NumericInput extends Component {
    static propTypes = {
        className: PropTypes.string,
        defaultValue: NumberOrString,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        value: NumberOrString,
        valueList: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        step: 10,
        valueList: [],
        onChange: () => {},
    };

    constructor(props) {
        super(props);
        if (props.value && props.defaultValue) {
            throw new Error('You can only have either defaultValue or value, not both');
        }
        this.value = props.value || props.defaultValue;
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value){
            this.value = nextProps.value;
        }
    }

    onInput = e => {
        const { defaultValue, onChange } = this.props;
        if (defaultValue) {
            this.value = e.target.value;
        }
        onChange(e);
    }

    onStepUp = () => {
        const { step } = this.props;
        const newValue = +this.value + step;
        this.onInput({ target: { value: newValue } });
    }

    onStepDown = () => {
        const { step } = this.props;
        const newValue = +this.value - step;
        this.onInput({ target: { value: newValue } });
    }

    render() {
        const { className, defaultValue, step, min, max, value, valueList } = this.props;

        return (
            <div className={className}>
                <button className="btn-flat step-down" onClick={this.onStepDown}>&ndash;</button>
                <input
                    type="number"
                    defaultValue={defaultValue}
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

