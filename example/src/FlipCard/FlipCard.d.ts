import React from 'react';
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
export declare class FlipCard extends React.Component<IFlipCardProps, IState> {
    static displayName: string;
    constructor(props: IFlipCardProps);
    state: IState;
    /**
     * Handler for open/close card.
     */
    private handleChange;
    render(): JSX.Element;
}
export {};
