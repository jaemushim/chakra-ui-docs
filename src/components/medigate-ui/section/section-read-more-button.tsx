import React from 'react';

import {cx} from '@chakra-ui/shared-utils';
import {chakra, forwardRef, HTMLChakraProps} from '@chakra-ui/system';
import Link from 'next/link';

import {PlusSquareIcon} from './assets/plus-square-icon';
import {useSectionStyles} from './section-content';

interface SectionReadMoreButtonProps extends HTMLChakraProps<'a'> {
    href: string;
}

export const SectionReadMoreButton = forwardRef<
    SectionReadMoreButtonProps,
    'a'
>((props, ref) => {
    const {href, className, children, ...rest} = props;
    const styles = useSectionStyles();
    return (
        <chakra.a
            as={Link}
            ref={ref}
            href={href}
            className={cx('chakra-section__readMoreButton', className)}
            __css={styles.readMoreButton}
            {...rest}
        >
            <PlusSquareIcon />
            {children}
            <span className="sr-only">더 보기</span>
        </chakra.a>
    );
});
