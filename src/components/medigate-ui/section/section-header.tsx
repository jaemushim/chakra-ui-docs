import {cx} from '@chakra-ui/shared-utils';
import {chakra, forwardRef, HTMLChakraProps} from '@chakra-ui/system';

import {useSectionStyles} from './section-content';

type SectionHeaderProps = HTMLChakraProps<'div'>;

export const SectionHeader = forwardRef<SectionHeaderProps, 'div'>(
    (props, ref) => {
        const {className, children, ...rest} = props;
        const styles = useSectionStyles();
        return (
            <chakra.div
                ref={ref}
                className={cx('chakra-section__header', className)}
                __css={styles.header}
                {...rest}
            >
                {children}
            </chakra.div>
        );
    }
);
