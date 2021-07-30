import React from "react";
import PropTypes from "prop-types";

// components
import SvgIcon from "../svg-icon/svg-icon.component";

// styles
import "./styles.scss";

// hoc
import clgComponentName from "../hoc/consoleComponentName";

const Tooltip = (props) => {
    const { styles, title, icon } = props;

    return (
        <span className={`${styles ? styles : ""} tooltip`} tooltiptitle={title ? title : "Not defined"}>
            {icon ? <SvgIcon icon={icon} /> : "?"}
        </span>
    );
};

Tooltip.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    styles: PropTypes.string
};

export default clgComponentName(Tooltip, "Tooltip");
