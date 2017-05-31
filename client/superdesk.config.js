/**
 * This is the default configuration file for the Superdesk application. By default,
 * the app will use the file with the name "superdesk.config.js" found in the current
 * working directory, but other files may also be specified using relative paths with
 * the SUPERDESK_CONFIG environment variable or the grunt --config flag.
 */
module.exports = function(grunt) {
    return {
        apps: ['superdesk-analytics'],
        defaultRoute: '/workspace/personal',
        validatorMediaMetadata: {
            headline: {
                required: true
            },
            alt_text: {
                required: true
            },
            description_text: {
                required: true
            },
            copyrightholder: {
                required: false
            },
            byline: {
                required: false
            },
            usageterms: {
                required: false
            },
            copyrightnotice: {
                required: false
            }
        },

        langOverride: {
            'en': {
                'ANPA Category': 'Category',
                'ANPA CATEGORY': 'CATEGORY',
                'Subject': 'Theme',
                'SUBJECT': 'THEME',
                'Genre': 'Content Style',
                'GENRE': 'CONTENT STYLE',
                'Place': 'Compliance Country',
                'PLACE': 'COMPLIANCE COUNTRY',
                'Footer': 'Footnote',
                'FOOTER': 'FOOTNOTE'
            }
        },

        features: {
            preview: 1,
            previewFormats: 1,
            legal_archive: 1,
            swimlane: {columnsLimit: 4},
            editor3: true
        },
        workspace: {
            analytics: true
        }
    };
};
