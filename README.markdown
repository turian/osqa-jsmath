OSQA jsMath Patch
=================

Adding [jsMath](http://www.math.union.edu/~dpvc/jsMath/) support to your [OSQA](http://www.osqa.net/).

  
*** authors ***

This patch was coded by [Arlo Breault](http://thoughtherder.com/).  
Tested and organized by Joseph Turian.  
Thanks to the people at [MathOverflow](http://mathoverflow.net/) for figuring most of this out and providing the code.  

  
*** osqa ***

For some reason, python's implementation of markdown is different from original perl spec,
most notably in how it handles the escape character \\. It seems to escape all chars, instead
of just specific ones. In order to get around this, install markdown2 as well.

`pip install markdown2`

Or, however you like to install python packages.
This is required because I use it to patch the osqa/forum/models/node.py file.
Otherwise, some things that look right in the preview (which uses a js implementation of markdown),
don't end up looking right.

Also, I've added the following to the settings file. This is to allow jsMath to convert math in the comments.

`FORM_ALLOW_MARKDOWN_IN_COMMENTS = True`  

  
***jsMath***

jsMath can be [downloaded](http://sourceforge.net/projects/jsmath/files/), along with the fonts and extra-fonts.
However, a patched version 3.6e w/ fonts is available as part of this git repo, to save you some trouble.
Also, the jsMath/easy/load.js file has be preconfigured, so you'll want that regardless.

If you download a newer version  version, edit the tex2math.js plugin on line 175 (or, thereabouts):

`(element.tagName && element.tagName.match(/^(script|noscript|style|textarea|pre|code)$/i));`

Becomes:

`(element.tagName && element.tagName.match(/^(script|noscript|style|textarea|pre)$/i));`

Above are allowing jsMath to look for math in `<code>` tags.
This is for the backticks trick, to get around markdown.

Move the entire jsMath/ folder into your skings js/ folder.
The provided patch to osqa assumes you are using the default skin.
If not, you'll have to manually add the easy/load.js script to your skin.