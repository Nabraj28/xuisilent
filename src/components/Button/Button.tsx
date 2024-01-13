import React from "react";
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor?: 'primary' | 'secondary' | 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' |
    'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' |
    'green' | 'grass' | 'lime' | 'mint' | 'sky';
    variant?: 'primary-border' | 'secondary-border' | 'gray-border' | 'gold-border' | 'bronze-border' | 'brown-border' | 'yellow-border' | 'amber-border' | 'orange-border' | 'tomato-border' |
    'red-border' | 'ruby-border' | 'crimson-border' | 'pink-border' | 'plum-border' | 'purple-border' | 'violet-border' | 'iris-border' | 'indigo-border' | 'blue-border' | 'cyan-border' | 'teal-border' | 'jade-border' |
    'green-border' | 'grass-border' | 'lime-border' | 'mint-border' | 'sky-border';
    rounded?: 'small' | 'large' | 'full';
    font?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({ bgColor, rounded, variant, font, ...props }) => {

    const sizeClass = () => {
        if (font === 'sm') {
            return {
                fontSize: '12px',

            }
        };
        if (font === 'md') {
            return {
                fontSize: '16px',
            }
        };
        if (font === 'lg') {
            return {
                fontSize: '20px',

            }
        };
        return {

        }

    };
    const roundedClass = () => {
        if (rounded === 'small') {
            return {
                borderRadius: '5px'
            }
        };
        if (rounded === 'large') {
            return {
                borderRadius: '10px'
            }
        };
        if (rounded === 'full') {
            return {
                borderRadius: '25px'
            }
        }; return { borderRadius: '10px' }

    };
    const colorClasses = () => {
        if (bgColor === 'primary') {
            return {
                borderColor: '#0066CC',
                backgroundColor: '#0066CC',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'secondary') {
            return {
                borderColor: '#60BB46',
                backgroundColor: '#60BB46',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'gray') {
            return {
                borderColor: '#7B7B7B',
                backgroundColor: '#7B7B7B',
                color: '#FAFAFA'
            };
        } else if (bgColor === 'gold') {
            return {
                borderColor: '#A39073',
                backgroundColor: '#A39073',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'bronze') {
            return {
                borderColor: '#AE8C7E',
                backgroundColor: '#AE8C7E',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'brown') {
            return {
                borderColor: '#B88C67',
                backgroundColor: '#B88C67',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'yellow') {
            return {
                borderColor: '#FFFF57',
                backgroundColor: '#FFFF57',
                color: '#1C2024',
            };
        } else if (bgColor === 'amber') {
            return {
                borderColor: '#FFD60A',
                backgroundColor: '#FFD60A',
                color: '#1C2024',
            };
        } else if (bgColor === 'orange') {
            return {
                borderColor: '#FF801F',
                backgroundColor: '#FF801F',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'tomato') {
            return {
                borderColor: '#EC6142',
                backgroundColor: '#EC6142',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'red') {
            return {
                borderColor: '#EC5D5E',
                backgroundColor: '#EC5D5E',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'ruby') {
            return {
                borderColor: '#EC5A72',
                backgroundColor: '#EC5A72',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'crimson') {
            return {
                borderColor: '#EE518A',
                backgroundColor: '#EE518A',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'pink') {
            return {
                borderColor: '#DE51A8',
                backgroundColor: '#DE51A8',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'plum') {
            return {
                borderColor: '#B658C4',
                backgroundColor: '#B658C4',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'purple') {
            return {
                borderColor: '#9A5CD0',
                backgroundColor: '#9A5CD0',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'violet') {
            return {
                borderColor: '#7D66D9',
                backgroundColor: '#7D66D9',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'iris') {
            return {
                borderColor: '#6E6ADE',
                backgroundColor: '#6E6ADE',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'indigo') {
            return {
                borderColor: '#5472E4',
                backgroundColor: '#5472E4',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'blue') {
            return {
                borderColor: '#3B9EFF',
                backgroundColor: '#3B9EFF',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'cyan') {
            return {
                borderColor: '#23AFD0',
                backgroundColor: '#23AFD0',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'teal') {
            return {
                borderColor: '#0EB39E',
                backgroundColor: '#0EB39E',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'jade') {
            return {
                borderColor: '#27B08B',
                backgroundColor: '#27B08B',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'green') {
            return {
                borderColor: '#33B074',
                backgroundColor: '#33B074',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'grass') {
            return {
                borderColor: '#53B365',
                backgroundColor: '#53B365',
                color: '#FAFAFA',
            };
        } else if (bgColor === 'lime') {
            return {
                borderColor: '#D4FF70',
                backgroundColor: '#D4FF70',
                color: '#1C2024',
            };
        } else if (bgColor === 'mint') {
            return {
                borderColor: '#A8F5E5',
                backgroundColor: '#A8F5E5',
                color: '#1C2024',
            };
        } else if (bgColor === 'sky') {
            return {
                borderColor: '#A8EEFF',
                backgroundColor: '#A8EEFF',
                color: '#1C2024',
            };
        } else
            return {}
    };
    const variantClasses = () => {
        if (variant === 'primary-border') {
            return {
                borderColor: '#0066CC',
                color: '#0066CC',
            };
        } else if (variant === 'secondary-border') {
            return {
                borderColor: '#60BB46',
                color: '#60BB46',
            };
        } else if (variant === 'gray-border') {
            return {
                borderColor: '#7B7B7B',
                color: '#7B7B7B',
            };
        } else if (variant === 'gold-border') {
            return {
                borderColor: '#A39073',
                color: '#A39073',
            };
        } else if (variant === 'bronze-border') {
            return {
                borderColor: '#AE8C7E',
                color: '#AE8C7E',
            };
        } else if (variant === 'brown-border') {
            return {
                borderColor: '#B88C67',
                color: '#B88C67',
            };
        } else if (variant === 'yellow-border') {
            return {
                borderColor: '#FFFF57',
                color: '#FFFF57',
            };
        } else if (variant === 'amber-border') {
            return {
                borderColor: '#FFD60A',
                color: '#FFD60A',
            };
        } else if (variant === 'orange-border') {
            return {
                borderColor: '#FF801F',
                color: '#FF801F',
            };
        } else if (variant === 'tomato-border') {
            return {
                borderColor: '#EC6142',
                color: '#EC6142',
            };
        } else if (variant === 'red-border') {
            return {
                borderColor: '#EC5D5E',
                color: '#EC5D5E',
            };
        } else if (variant === 'ruby-border') {
            return {
                borderColor: '#EC5A72',
                color: '#EC5A72',
            };
        } else if (variant === 'crimson-border') {
            return {
                borderColor: '#EE518A',
                color: '#EE518A',
            };
        } else if (variant === 'pink-border') {
            return {
                borderColor: '#DE51A8',
                color: '#DE51A8',
            };
        } else if (variant === 'plum-border') {
            return {
                borderColor: '#B658C4',
                color: '#B658C4',
            };
        } else if (variant === 'purple-border') {
            return {
                borderColor: '#9A5CD0',
                color: '#9A5CD0',
            };
        } else if (variant === 'violet-border') {
            return {
                borderColor: '#7D66D9',
                color: '#7D66D9',
            };
        } else if (variant === 'iris-border') {
            return {
                borderColor: '#6E6ADE',
                color: '#6E6ADE',
            };
        } else if (variant === 'indigo-border') {
            return {
                borderColor: '#5472E4',
                color: '#5472E4',
            };
        } else if (variant === 'blue-border') {
            return {
                borderColor: '#3B9EFF',
                color: '#3B9EFF',
            };
        } else if (variant === 'cyan-border') {
            return {
                borderColor: '#23AFD0',
                color: '#23AFD0',
            };
        } else if (variant === 'teal-border') {
            return {
                borderColor: '#0EB39E',
                color: '#0EB39E',
            };
        } else if (variant === 'jade-border') {
            return {
                borderColor: '#27B08B',
                color: '#27B08B',
            };
        } else if (variant === 'green-border') {
            return {
                borderColor: '#33B074',
                color: '#33B074',
            };
        } else if (variant === 'grass-border') {
            return {
                borderColor: '#53B365',
                color: '#53B365',
            };
        } else if (variant === 'lime-border') {
            return {
                borderColor: '#D4FF70',
                color: '#D4FF70',
            };
        } else if (variant === 'mint-border') {
            return {
                borderColor: '#A8F5E5',
                color: '#A8F5E5',
            };
        } else if (variant === 'sky-border') {
            return {
                borderColor: '#A8EEFF',
                color: '#A8EEFF',
            };
        } else {
            return {};
        }
    };
    return (
        <button style={{ ...colorClasses(), ...variantClasses(), ...sizeClass(), ...roundedClass(), ...props.style }} {...props} >

            {props.children}

        </button>
    )
}


