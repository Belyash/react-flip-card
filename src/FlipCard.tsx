import React, { CSSProperties as ICSSProperties } from 'react';

import './index.scss';

/**
 * Component properties.
 */
export interface IFlipCardProps {
    /** Caption on front side. */
    caption: string;

    /** Force open Flip Card. */
    forceOpen?: boolean;

    /** Height. */
    height?: string | number;

    /** Width. */
    width?: string | number;
}

/**
 * Component state.
 */
interface IState {
    isOpen: boolean;
}

/**
 * Checkbox component.
 */
export class FlipCard extends React.Component<IFlipCardProps, IState> {
    public static displayName: string = 'FlipCard';

    constructor (props: IFlipCardProps) {
        super(props);

        this.state = {
            isOpen: Boolean(props.forceOpen),
        };
    }

    public state: IState = {
        isOpen: false,
    };

    /**
     * Handler for open/close card.
     */
    private handleChange = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    public render (): JSX.Element {
        const {
            caption,
            children,
            height,
            width,
        } = this.props;
        const { isOpen } = this.state;
        const style: ICSSProperties = {};

        if (height) {
            style.height = height;
        }

        if (width) {
            style.width = width;
        }

        return (
            <div className={`flip-card ${ isOpen ? 'm-open' : '' }`} style={style}>
                <div className="flip-card__inner">
                    <div className="flip-card__front" onClick={this.handleChange}>
                        <div className="flip-card__expand" />
                        <div className="flip-card__caption">{caption}</div>
                    </div>
                    <div className="flip-card__back">
                        <div className="flip-card__close" onClick={this.handleChange} />
                        <div className="flip-card__text">{children}</div>
                    </div>
                </div>
            </div>
        );
    }
}
