import React from "react";
import './pre-loader.styles.scss';
import circlesPreloader from "../../assets/images/Circles-menu-3.gif"
import {connect} from "react-redux";
import {mapStateToProps} from "../../redux/common/common.maps";

const PreLoader = (props) => props.isLoading ? (
    <div className='loader' style={{backgroundImage: `url(${circlesPreloader})`}}>
    </div>
) : null;

export default connect(mapStateToProps)(PreLoader);
