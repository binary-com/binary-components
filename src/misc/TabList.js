import React, { PureComponent } from 'react';

type Props = {
    id: string,
    className: string,
    children: Node,
    activeIndex?: number,
    vertical?: bool,
    showText?: bool,
    showIcons?: bool,
    onChange: (index: number) => void,
};

export default class TabList extends PureComponent {
    props: Props;

    state: {
        activeIndex: number,
    };

    static defaultProps = {
        activeIndex: 0,
        vertical: false,
        showText: true,
        showIcons: true,
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            activeIndex: props.activeIndex,
        };
    }

    onTabSelected = (index: number): void => {
        const { onChange } = this.props;
        onChange(index);
        this.setState({ activeIndex: index });
    }

    props: Props;

    render() {
        const { id, className, vertical, showIcons, showText } = this.props;
        const { activeIndex } = this.state;

        return (
            <div
                id={id}
                role="tablist"
                className={(vertical ? 'vertical ' : '') + className}
            >
                {React.Children.map(this.props.children, (child: React$Element<any>, index: number): React$Element<any> => (
                    child && React.cloneElement(child, {
                        selected: activeIndex === index,
                        showIcon: showIcons,
                        showText,
                        index,
                        onClick: () => this.onTabSelected(index),
                    })
                ))}
            </div>
        );
    }
}
