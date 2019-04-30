import React from 'react';
import renderer from "react-test-renderer";

import { FlipCard } from './index';

describe("FlipCard", () => {
    it("renders properly", () => {
        const tree = renderer
            .create(<FlipCard caption="Caption">Text</FlipCard>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
