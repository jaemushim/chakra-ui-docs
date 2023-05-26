import {createStylesContext} from "@chakra-ui/system";
import {createContext} from "@chakra-ui/react-utils";

export const [SectionStylesProvider, useSectionStyles] =
    createStylesContext('Section');

export const [SectionProvider, useSection] = createContext<{
    hasDivider: boolean;
    setHasDivider: any;
}>({
    name: 'Section',
    errorMessage:
        'useSectionContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Section />',
});
