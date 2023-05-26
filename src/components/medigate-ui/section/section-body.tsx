import {chakra, forwardRef, HTMLChakraProps} from '@chakra-ui/system';

import {useSectionStyles} from './section-content';
import {cx} from "@chakra-ui/shared-utils";

type SectionBodyProps = HTMLChakraProps<'div'>;

export const SectionBody = forwardRef<SectionBodyProps, 'div'>((props, ref) => {
    const {className, children, ...rest} = props;
    const styles = useSectionStyles();
    return (
        <chakra.div
            ref={ref}
            className={cx('chakra-section__body', className)}
            __css={styles.body}
            {...rest}
        >
            {children}
        </chakra.div>
    );
});
