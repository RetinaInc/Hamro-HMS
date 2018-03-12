import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import UserDropDown from 'components/dropdownMenus/userDropdown';
describe('UserDropDown', () => {
    it('renders correctly', () => {
        const userDropDown = shallow(<UserDropDown />);

        expect(shallowToJson(userDropDown)).toMatchSnapshot();


    });
});