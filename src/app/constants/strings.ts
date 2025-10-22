import { getTranslations, type Locale } from '@/lib/translations';

export function getStrings(locale: Locale = 'en') {
    const t = getTranslations(locale);
    
    return {
        welcomemsg: t.hero.welcome,
        aboutapp: t.hero.subtitle,
        section2: t.sections.howItWorks.title,
        sectionabt2: t.sections.howItWorks.description,
        section3: t.sections.features.title,
        sectionabt3: t.sections.features.description,
        section3items: {
            item1: {
                title: t.sections.features.item1.title,
                about: t.sections.features.item1.description,
            },
            item2: {
                title: t.sections.features.item2.title,
                about: t.sections.features.item2.description,
            },
            item3: {
                title: t.sections.features.item3.title,
                about: t.sections.features.item3.description,
            },
        },
        section4: t.sections.cta.title,
        sectionabt4: t.sections.cta.description,
        ctaButton: t.sections.cta.button,
    };
}

// For backward compatibility, export default English strings
export const STRINGS = getStrings('en');