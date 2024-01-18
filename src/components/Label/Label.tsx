import React from 'react';
import PropTypes from 'prop-types';


export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    size?: "small" | "medium" | "large" | "extra-large" | "double-extra-large";
    weight?: "thin" | "light" | "medium" | "bold";
}

const Label: React.FC<LabelProps> = ({ size, weight, ...props }) => {

    const sizeClass = () => {
        if (size === "small") {
            return {
                fontSize: '12px',
                lineHeight: '20px'
            };
        }
        if (size === "medium") {
            return {
                fontSize: '16px',
                lineHeight: '24px'
            };
        }
        if (size === "large") {
            return {
                fontSize: '20px',
                lineHeight: '28px'
            };
        }
        if (size === "extra-large") {
            return {
                fontSize: '24px',
                lineHeight: '32px'
            };
        }
        if (size === "double-extra-large") {
            return {
                fontSize: '28px',
                lineHeight: '36px'
            };
        }
        return {};
    };

    const weightClass = () => {
        if (weight === "thin") {
            return {
                fontWeight: '100'
            };
        }
        if (weight === "light") {
            return {
                fontWeight: '300'
            };
        }
        if (weight === "medium") {
            return {
                fontWeight: '500'
            };
        }
        if (weight === "bold") {
            return {
                fontWeight: '700'
            };
        }
        return {};
    };

    const labelClasses = `custom-label ${props.className}`;

    return (
        <p
            className={labelClasses}
            style={{ ...sizeClass(), ...weightClass(), ...props.style }}
        >
            {props.children}
        </p>
    );
};

Label.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large", "extra-large", "double-extra-large"]),
    weight: PropTypes.oneOf(["thin", "light", "medium", "bold"]),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
};

Label.defaultProps = {
    className: '',
    style: {},
};

export default Label;
