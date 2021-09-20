import React from 'react';

interface SwitchButtonProps {
    customClass?: string;
    checked?: boolean;
    id: string;
    name: string;
    onChange?: (e?: any) => void | any;
    optionLabels?: {
        yes: string;
        no: string;
    };
    small?: boolean;
    disabled?: boolean;
    icon?: {
        yes: React.ElementType | React.ComponentType;
        no: React.ElementType | React.ComponentType;
    };
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
    id,
    name,
    checked = false,
    onChange,
    optionLabels = {
        yes: 'yes',
        no: 'no',
    },
    small = false,
    disabled = false,
    customClass,
    icon,
}): JSX.Element => {
    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if (e.code !== '32' || !onChange) return;
        e.preventDefault();

        onChange(!checked);
    };

    React.useEffect(() => {
        console.log(icon);
    });

    return (
        <div
            className={`toggle-switch ${
                small ? 'toggle-switch--small-switch' : ''
            } ${customClass || ''}`}
        >
            <input
                type='checkbox'
                name={name}
                className='toggle-switch--checkbox'
                id={id}
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked)}
                disabled={disabled}
            />
            <label
                className='toggle-switch--label'
                tabIndex={disabled ? -1 : 1}
                onKeyDown={(e) => handleKeyPress(e)}
                htmlFor={id}
            >
                {icon && !small ? (
                    <span
                        className={
                            disabled
                                ? 'toggle-switch--inner toggle-switch--disabled'
                                : 'toggle-switch--inner'
                        }
                        tabIndex={-1}
                    >
                        <div
                            className={`toggle-switch--icon ${
                                checked ? 'toggle-switch--icon-checked' : ''
                            }`}
                        >
                            <div className='toggle-switch--icon--yes'>
                                {icon.yes}
                            </div>
                            <div className='toggle-switch--icon--no'>
                                {icon.no}
                            </div>
                        </div>
                    </span>
                ) : (
                    <span
                        className={
                            disabled
                                ? 'toggle-switch--inner toggle-switch--disabled'
                                : 'toggle-switch--inner'
                        }
                        data-yes={optionLabels.yes}
                        data-no={optionLabels.no}
                        tabIndex={-1}
                    />
                )}
                <span
                    className={
                        disabled
                            ? `toggle-switch--switch toggle-switch--disabled ${
                                  checked ? 'toggle-switch--switch-checked' : ''
                              }`
                            : `toggle-switch--switch ${
                                  checked ? 'toggle-switch--switch-checked' : ''
                              } `
                    }
                    tabIndex={-1}
                />
            </label>
        </div>
    );
};

export default SwitchButton;
