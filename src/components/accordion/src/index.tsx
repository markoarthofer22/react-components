/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { MdOpenInFull } from 'react-icons/md';
import AnimateHeight from 'react-animate-height';

import { AccordionStyles } from './styles';

export type IconType =
    | React.ElementType
    | React.ComponentType
    | React.ReactNode;

export interface IAccordionItemProps {
    children: any;
    className?: string;
    icon?: IconType;
    title: string;
    active?: boolean;
    returnActive?: (e?: any) => void;
}

export const AccordionItem: React.FC<IAccordionItemProps> = ({
    children,
    className,
    icon,
    title,
    active,
    returnActive,
}): JSX.Element => {
    const [isActive, setIsActive] = React.useState<string | number>(
        active ? 'auto' : 0
    );

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (Boolean(isActive) === active) {
            setIsActive(0);
            returnActive && returnActive(-1);
        } else {
            returnActive && returnActive();
        }
    };

    React.useEffect(() => {
        if (Boolean(isActive) === active) return;

        setIsActive(active ? 'auto' : 0);
    }, [active]);

    const Icon = icon as React.ElementType;
    return (
        <div className={`${className}--item`}>
            <div className={`${className}--item--title`}>
                <h5>{title}</h5>
                <span onClick={(e) => handleToggle(e)}>
                    <Icon />
                </span>
            </div>
            <AnimateHeight height={isActive} duration={500}>
                <div className={`${className}--item--content--wrapper`}>
                    <div className={`${className}--item--content`}>
                        {React.Children.only(children)}
                    </div>
                </div>
            </AnimateHeight>
        </div>
    );
};

export type TData = {
    title: string;
    content: string;
};

export interface IAccordionProps {
    children?:
        | React.ReactElement<IAccordionItemProps>
        | Array<React.ReactElement<IAccordionItemProps>>;
    data?: Array<TData>;
    className?: string;
    icon?: IconType;
    title?: string;
}

export const Accordion: React.FC<IAccordionProps> = ({
    children,
    data,
    className = 'accordion',
    icon,
    title,
}): JSX.Element => {
    const [activeIndex, setActiveIndex] = React.useState<number>(-1);

    const theme = useTheme();
    const Icon = icon || MdOpenInFull;

    return (
        <div className={`${className}`} css={AccordionStyles(theme)}>
            {title && <div className={`${className}--title`}>{title}</div>}
            <div className={`${className}--wrapper`}>
                {data && data.length > 0
                    ? data?.map((item: TData, index: number) => (
                          <AccordionItem
                              active={activeIndex === index}
                              title={item.title}
                              className={className}
                              icon={Icon}
                              returnActive={() => setActiveIndex(index)}
                          >
                              <>{item.content}</>
                          </AccordionItem>
                      ))
                    : children &&
                      React.Children.map(children, (child: any, i: number) =>
                          React.cloneElement(child, {
                              key: i,
                              icon: Icon,
                              className,
                              active: activeIndex === i,
                              returnActive: () => setActiveIndex(i),
                          })
                      )}
            </div>
        </div>
    );
};

export default Accordion;
