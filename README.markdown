***jsMath***

jsMath can be [downloaded](http://sourceforge.net/projects/jsmath/files/), along with the fonts and extra-fonts.
However, a patched version 3.6e w/ fonts is available as part of this git repo, to save you some trouble.

If you download a newer version  version, edit the tex2math.js plugin on line 175 (or, thereabouts):

(element.tagName && element.tagName.match(/^(script|noscript|style|textarea|pre|code)$/i));

Becomes:

(element.tagName && element.tagName.match(/^(script|noscript|style|textarea|pre)$/i));

Above are allowing jsMath to look for math in <code> tags.
This is for the backtick ` trick, to get around markdown.

Move the entire jsMath/ folder into your skings js/ folder.
The provided patch to osqa assumes you are using the default skin.
If not, you'll have to manually add the easy/load.js script to your skin.