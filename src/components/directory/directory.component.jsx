import React from 'react';

import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getDirectorySections} from "../../redux/directory/directory.selectors";

class Directory extends React.Component {
    render() {
        const {sections} = this.props;

        return <div className="directory-menu">
            {
                sections.map(({id, ...othersSectionProps}) => (
                    <MenuItem key={id} {...othersSectionProps}
                              subtitle={"SHOP NOW"}/>))
            }
        </div>;
    }
}

export default connect(createStructuredSelector({
    sections: getDirectorySections
}))(Directory)


