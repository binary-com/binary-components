import React, { PropTypes, PureComponent } from 'react';

export default class NumericInput extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        decimals: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        value: PropTypes.number,
        valueList: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        decimals: 2,
        step: 10,
        valueList: [],
        onChange: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    onStepUp = () => {
        const { step, decimals, onChange } = this.props;
        const { value } = this.state;
        const newValue = +((+value + step).toFixed(decimals));
        this.setState({ value: newValue });
        onChange({ target: { value: newValue } });
    }

    onStepDown = () => {
        const { step, onChange, decimals } = this.props;
        const { value } = this.state;
        const newValue = +((+value - step).toFixed(decimals));
        this.setState({ value: newValue });
        onChange({ target: { value: newValue } });
    }

    onChange = e => {
        this.setState({ value: e.target.value });
        e.persist();
        this.props.onChange(e);
    }

    componentWillUpdate(nProps, nState){
        if (this.state.value.length - nState.value.length === 2) {
            this.refs.input.value = '0' + nState.value;
        }
    }

    render() {
        const { className, step, min, max, valueList } = this.props;
        const { value } = this.state;
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
                    onChange={this.onChange}
                    ref="input"
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
