import {chakra, forwardRef, HTMLChakraProps} from '@chakra-ui/system';

import {useSectionStyles} from './section-content';
import {cx} from "@chakra-ui/shared-utils";

export interface SectionTitleProps extends HTMLChakraProps<'div'> {
    isVisuallyHidden?: boolean;
}

export const SectionTitle = forwardRef<SectionTitleProps, 'div'>(
    (props, ref) => {
        const {isVisuallyHidden, className, children, ...rest} = props;
        const styles = useSectionStyles();
        return (
            <chakra.h2
                ref={ref}
                className={cx(
                    'chakra-section__title',
                    className,
                    isVisuallyHidden && 'sr-only'
                )}
                __css={styles.title}
                {...rest}
            >
                {children}
            </chakra.h2>
        );
    }
);
