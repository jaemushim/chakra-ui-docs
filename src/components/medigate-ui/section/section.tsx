import {
    chakra,
    forwardRef,
    HTMLChakraProps,
    omitThemingProps,
    ThemingProps,
    useMultiStyleConfig,
} from '@chakra-ui/system';
import {cx} from '@chakra-ui/shared-utils';

import {SectionProvider, SectionStylesProvider} from './section-content';
import {useBoolean} from "@chakra-ui/react";
import {Spacer} from "@chakra-ui/layout";

interface SectionProps extends HTMLChakraProps<'div'>, ThemingProps<'Section'> {
    variant?: 'basic' | 'container' | 'unstyled';
    isAnimate?: boolean;
}

export const Section = forwardRef<SectionProps, 'div'>(function Section(
    props,
    ref
) {
    const {
        className,
        children,
        isAnimate = false,
        ...rest
    } = omitThemingProps(props);

    const [hasDivider, setHasDivider] = useBoolean();

    const styles = useMultiStyleConfig('Section', props);

    return (
        <chakra.section
            ref={ref}
            className={cx('chakra-section', className)}
            __css={{
                ...styles.root,
                position: 'relative',
                height: hasDivider ? `calc(100% + 32px)` : undefined,
            }}
            {...rest}
        >
            <SectionProvider value={{hasDivider, setHasDivider}}>
                <SectionStylesProvider value={styles}>
                    {children}
                </SectionStylesProvider>
            </SectionProvider>

            {hasDivider && <Spacer h={'16px'} />}
        </chakra.section>
    );
});
