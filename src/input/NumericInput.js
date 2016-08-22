import React, { PureComponent } from 'react';

type Props = {
    className: string,
    decimals: number,
    min: number,
    max: number,
    step: number,
    defaultValue: number,
    valueList: number[],
    onChange: (newValue: number) => void,
}

export default class NumericInput extends PureComponent {

    props: Props;

    state: {
        value: number,
    }

    static defaultProps = {
        defaultValue: 0,
        decimals: 2,
        step: 10,
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            value: props.defaultValue,
        };
    }

    onStepUp = () => {
        const { step, decimals, max } = this.props;
        const { value } = this.state;
        const newValue = +((+value + step).toFixed(decimals));

        if (newValue > max) return;

        this.onChange(newValue);
    }

    onStepDown = () => {
        const { step, decimals, min } = this.props;
        const { value } = this.state;
        const newValue = +((+value - step).toFixed(decimals));

        if (newValue < min) return;

        this.onChange(newValue);
    }

    onChange = (newValue: number) => {
        this.setState({ value: newValue });
        this.props.onChange(newValue);
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
                    onChange={e => this.onChange(+e.target.value)}
                />
                <button className="btn-flat step-up" onClick={this.onStepUp}>+</button>
                {valueList &&
                    <datalist id="values">
                        {valueList.map((x: number) =>
                            <option key={x} value={x} />
                        )}
                    </datalist>
                }
            </div>
        );
    }
}
