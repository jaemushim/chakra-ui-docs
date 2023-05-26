import {cx} from '@chakra-ui/shared-utils';
import {chakra, forwardRef, HTMLChakraProps} from '@chakra-ui/system';

import {useSection, useSectionStyles} from './section-content';
import {useEffect} from "react";

interface SectionDividerProps extends HTMLChakraProps<'div'> {
    isDark?: boolean;
}

export const SectionDivider = forwardRef<SectionDividerProps, 'div'>(
    (props, ref) => {
        const {isDark, className, children, ...rest} = props;
        const styles = useSectionStyles();

        const {setHasDivider} = useSection();

        useEffect(() => {
            if (setHasDivider) {
                setHasDivider.on();
            }
        }, [setHasDivider]);

        return (
            <chakra.div
                ref={ref}
                className={cx('chakra-section__divider', className)}
                __css={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '16px',
                    margin: {
                        base: '0 -15px',
                        md: '0 -20px',
                    },
                    bg: isDark ? '#e8e8e8' : '#f5f5f5',
                    ...styles.divider,
                }}
                {...rest}
            >
                {children}
            </chakra.div>
        );
    }
);
