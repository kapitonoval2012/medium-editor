(function () {
    'use strict';

    /* MediumEditor.extensions.button.defaults: [Object]
     * Set of default config options for all of the built-in MediumEditor buttons
     */
    MediumEditor.extensions.button.prototype.defaults = {
        'bold': {
            name: 'bold',
            action: 'bold',
            aria: 'bold',
            tagNames: ['b', 'strong'],
            style: {
                prop: 'font-weight',
                value: '700|bold'
            },
            useQueryState: true,
            contentDefault: '<b>B</b>',
            contentFA: '<i class="fa fa-bold"></i>'
        },
        'italic': {
            name: 'italic',
            action: 'italic',
            aria: 'italic',
            tagNames: ['i', 'em'],
            style: {
                prop: 'font-style',
                value: 'italic'
            },
            useQueryState: true,
            contentDefault: '<b><i>I</i></b>',
            contentFA: '<i class="fa fa-italic"></i>'
        },
        'underline': {
            name: 'underline',
            action: 'underline',
            aria: 'underline',
            tagNames: ['u'],
            style: {
                prop: 'text-decoration',
                value: 'underline'
            },
            useQueryState: true,
            contentDefault: '<b><u>U</u></b>',
            contentFA: '<i class="fa fa-underline"></i>'
        },
        'strikethrough': {
            name: 'strikethrough',
            action: 'strikethrough',
            aria: 'strike through',
            tagNames: ['strike'],
            style: {
                prop: 'text-decoration',
                value: 'line-through'
            },
            useQueryState: true,
            contentDefault: '<s>A</s>',
            contentFA: '<i class="fa fa-strikethrough"></i>'
        },
        'superscript': {
            name: 'superscript',
            action: 'superscript',
            aria: 'superscript',
            tagNames: ['sup'],
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
            // useQueryState: true
            contentDefault: '<b>x<sup>1</sup></b>',
            contentFA: '<i class="fa fa-superscript"></i>'
        },
        'subscript': {
            name: 'subscript',
            action: 'subscript',
            aria: 'subscript',
            tagNames: ['sub'],
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
            // useQueryState: true
            contentDefault: '<b>x<sub>1</sub></b>',
            contentFA: '<i class="fa fa-subscript"></i>'
        },
        'image': {
            name: 'image',
            action: 'image',
            aria: 'image',
            tagNames: ['img'],
            contentDefault: '<b>image</b>',
            contentFA: '<i class="fa fa-picture-o"></i>'
        },
        'html': {
            name: 'html',
            action: 'html',
            aria: 'evaluate html',
            tagNames: ['iframe', 'object'],
            contentDefault: '<b>html</b>',
            contentFA: '<i class="fa fa-code"></i>'
        },
        'orderedlist': {
            name: 'orderedlist',
            action: 'insertorderedlist',
            aria: 'ordered list',
            tagNames: ['ol'],
            useQueryState: true,
            contentDefault: '<b>1.</b>',
            contentFA: '<i class="fa fa-list-ol"></i>'
        },
        'unorderedlist': {
            name: 'unorderedlist',
            action: 'insertunorderedlist',
            aria: 'unordered list',
            tagNames: ['ul'],
            useQueryState: true,
            contentDefault: '<b>&bull;</b>',
            contentFA: '<i class="fa fa-list-ul"></i>'
        },
        'indent': {
            name: 'indent',
            action: 'indent',
            aria: 'indent',
            tagNames: [],
            contentDefault: '<b>&rarr;</b>',
            contentFA: '<i class="fa fa-indent"></i>'
        },
        'outdent': {
            name: 'outdent',
            action: 'outdent',
            aria: 'outdent',
            tagNames: [],
            contentDefault: '<b>&larr;</b>',
            contentFA: '<i class="fa fa-outdent"></i>'
        },
        'justifyCenter': {
            name: 'justifyCenter',
            action: 'justifyCenter',
            aria: 'center justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'center'
            },
            contentDefault: '<b>C</b>',
            contentFA: '<i class="fa fa-align-center"></i>'
        },
        'justifyFull': {
            name: 'justifyFull',
            action: 'justifyFull',
            aria: 'full justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'justify'
            },
            contentDefault: '<b>J</b>',
            contentFA: '<i class="fa fa-align-justify"></i>'
        },
        'justifyLeft': {
            name: 'justifyLeft',
            action: 'justifyLeft',
            aria: 'left justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'left'
            },
            contentDefault: '<b>L</b>',
            contentFA: '<i class="fa fa-align-left"></i>'
        },
        'justifyRight': {
            name: 'justifyRight',
            action: 'justifyRight',
            aria: 'right justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'right'
            },
            contentDefault: '<b>R</b>',
            contentFA: '<i class="fa fa-align-right"></i>'
        },
        // Known inline elements that are not removed, or not removed consistantly across browsers:
        // <span>, <label>, <br>
        'removeFormat': {
            name: 'removeFormat',
            aria: 'remove formatting',
            action: 'removeFormat',
            contentDefault: '<b>X</b>',
            contentFA: '<i class="fa fa-eraser"></i>'
        },

        /***** Buttons for appending block elements (append-<element> action) *****/

        'quote': {
            name: 'quote',
            action: 'append-blockquote',
            aria: 'blockquote',
            tagNames: ['blockquote'],
            contentDefault: '<b>&ldquo;</b>',
            contentFA: '<i class="fa fa-quote-right"></i>'
        },
        'pre': {
            name: 'pre',
            action: 'append-pre',
            aria: 'preformatted text',
            tagNames: ['pre'],
            contentDefault: '<b>0101</b>',
            contentFA: '<i class="fa fa-code fa-lg"></i>'
        },
        'h1': {
            name: 'h1',
            action: 'append-h1',
            aria: 'header type one',
            tagNames: ['h1'],
            contentDefault: '<b>H1</b>',
            contentFA: '<i class="fa fa-header"><sup>1</sup>'
        },
        'h2': {
            name: 'h2',
            action: 'append-h2',
            aria: 'header type two',
            tagNames: ['h2'],
            contentDefault: '<b>H2</b>',
            contentFA: '<i class="fa fa-header"><sup>2</sup>'
        },
        'h3': {
            name: 'h3',
            action: 'append-h3',
            aria: 'header type three',
            tagNames: ['h3'],
            contentDefault: '<b>H3</b>',
            contentFA: '<i class="fa fa-header"><sup>3</sup>'
        },
        'h4': {
            name: 'h4',
            action: 'append-h4',
            aria: 'header type four',
            tagNames: ['h4'],
            contentDefault: '<b>H4</b>',
            contentFA: '<i class="fa fa-header"><sup>4</sup>'
        },
        'h5': {
            name: 'h5',
            action: 'append-h5',
            aria: 'header type five',
            tagNames: ['h5'],
            contentDefault: '<b>H5</b>',
            contentFA: '<i class="fa fa-header"><sup>5</sup>'
        },
        'h6': {
            name: 'h6',
            action: 'append-h6',
            aria: 'header type six',
            tagNames: ['h6'],
            contentDefault: '<b>H6</b>',
            contentFA: '<i class="fa fa-header"><sup>6</sup>'
        },

        // new buttons template
        'm-quote': {
            name: 'm-quote',
            action: 'append-blockquote',
            aria: 'blockquote',
            tagNames: ['blockquote'],
            contentDefault: '<span class="svgIcon svgIcon--blockquote svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21" data-multipart="true"><path d="M15.48 18.024c-2.603 0-4.45-2.172-4.45-4.778 0-3.263 2.498-6.3 6.517-8.803l1.297 1.303c-2.497 1.63-3.91 3.042-3.91 5.214 0 2.824 3.91 3.582 3.91 3.91.11 1.41-1.194 3.15-3.366 3.15h.004v.004z"></path><path d="M6.578 18.024c-2.606 0-4.453-2.172-4.453-4.778 0-3.263 2.497-6.3 6.515-8.803l1.303 1.303c-2.606 1.63-3.907 3.042-3.907 5.106 0 2.823 3.91 3.58 3.91 3.91 0 1.518-1.304 3.257-3.368 3.257z"></path></svg></span>',
            contentFA: '<i class="fa fa-quote-right"></i>'
        },
        'T': {
            name: 'T',
            action: 'append-h3',
            aria: 'header type three',
            tagNames: ['h3'],
            contentDefault: '<span class="svgIcon svgIcon--tBigger svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z" fill-rule="evenodd"></path></svg></span>',
            contentFA: '<i class="fa fa-header"><sup>3</sup>'
        },
        't': {
            name: 't',
            action: 'append-h2',
            aria: 'header type two',
            tagNames: ['h2'],
            contentDefault: '<span class="svgIcon svgIcon--tSmaller svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z" fill-rule="evenodd"></path></svg></span>',
            contentFA: '<i class="fa fa-header"><sup>2</sup>'
        },
        'm-bold': {
            name: 'm-bold',
            action: 'bold',
            aria: 'bold',
            tagNames: ['b', 'strong'],
            style: {
                prop: 'font-weight',
                value: '700|bold'
            },
            useQueryState: true,
            contentDefault: '<span class="svgIcon svgIcon--bold svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M10.308 17.993h-5.92l.11-.894.783-.12c.56-.11.79-.224.79-.448V5.37c0-.225-.113-.336-.902-.448H4.5l-.114-.894h6.255c4.02 0 5.58 1.23 5.58 3.13 0 1.896-1.78 3.125-3.79 3.463v.11c2.69.34 4.25 1.56 4.25 3.57 0 2.35-2.01 3.69-6.37 3.69l.02.01h-.02zm-.335-12.96H8.967V10.5h1.23c1.788 0 2.79-1.23 2.79-2.683 0-1.685-1.004-2.803-3.006-2.803v.02zm-.223 6.36h-.783v5.588l1.225.23h.22c1.67 0 3.01-1.004 3.01-2.792 0-2.122-1.566-3.016-3.69-3.016h.018z" fill-rule="evenodd"></path></svg></span>',
            contentFA: '<i class="fa fa-bold"></i>'
        }
    };

})();
