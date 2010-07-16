/*
 *  eurm10/def.js
 *  
 *  This file loads the  font into jsMath. To do this use
 *  
 *      <SCRIPT>jsMath.Font.Load("eurm10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the eurm10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not 
 *  customized on a per-browser basis as it probably should be.
 *  
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *  
 *  Once this file is loaded, you can use \char{eurm10}{nn} to access
 *  any character in the font.  In addition, the \eurm10 macro will switch to
 *  the eufm font
 *  
 *  ---------------------------------------------------------------------
 *
 *  jsMath is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  jsMath is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with jsMath; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

jsMath.Add(jsMath.TeX,{

  eurm10: [
    // 00 - 0F
    [0.429,0.691,0,{ic: 0.111, krn: {'61': -0.0555, '59': -0.0833, '58': -0.0833}}],
    [0.713,0.691,0,{krn: {'127': 0.0278}}],
    [0.758,0.691,0,{krn: {'127': 0.0278}}],
    [0.771,0.691,0,{krn: {'127': 0.0278}}],
    [0.596,0.691],
    [0.723,0.691,0,{krn: {'127': 0.0278}}],
    [0.647,0.691],
    [0.716,0.691,0,{krn: {'127': 0.0278}}],
    [0.833,0.691],
    [0.703,0.691,0,{krn: {'127': 0.0278}}],
    [0.876,0.691],
    [0.658,0.459],
    [0.663,0.691,0.189],
    [0.608,0.459,0.189],
    [0.501,0.691],
    [0.55,0.459],
    // 10 - 1F
    [0.512,0.691,0.126,{krn: {'127': 0.0555}}],
    [0.56,0.459,0.189],
    [0.554,0.691,0,{krn: {'127': 0.0278}}],
    [0.335,0.459],
    [0.555,0.459],
    [0.542,0.691,0,{krn: {'127': -0.0555}}],
    [0.618,0.459,0.189],
    [0.599,0.459],
    [0.553,0.691,0.126],
    [0.609,0.459,0,{krn: {'127': 0.0555}}],
    [0.548,0.459,0.189,{krn: {'127': 0.0278}}],
    [0.605,0.459],
    [0.514,0.459,0,{krn: {'127': 0.0555}}],
    [0.587,0.459],
    [0.728,0.691,0.189],
    [0.577,0.459,0.189],
    // 20 - 2F
    [0.754,0.691,0.189,{krn: {'127': 0.0278}}],
    [0.851,0.459,0,{krn: {'127': 0.0278}}],
    [0.486,0.459],
    [0.552,0.691],
    [0.876,0.629],
    [0,0,0],
    [0,0,0],
    [0.763,0.459,0,{krn: {'127': 0.0278}}],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 30 - 3F
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.5,0.691],
    [0.278,0.108],
    [0.278,0.108],
    [0.756,0.52,0.0203],
    [0.502,0.749,0.25,{krn: {'65': -0.0555, '97': -0.0555, '103': -0.0555, '1': -0.0555, '3': -0.0555, '11': -0.0555}}],
    [0.756,0.52,0.0203],
    [0,0,0],
    // 40 - 4F
    [0.56,0.691],
    [0.771,0.691],
    [0.655,0.691],
    [0.715,0.691,0,{krn: {'127': 0.0555}}],
    [0.828,0.691],
    [0.605,0.691],
    [0.499,0.691,0,{krn: {'61': -0.0555, '59': -0.0833, '58': -0.0833}}],
    [0.765,0.691,0,{krn: {'127': 0.0278}}],
    [0.783,0.691],
    [0.394,0.691],
    [0.402,0.691,0.126],
    [0.669,0.691],
    [0.559,0.691],
    [1.04,0.691],
    [0.83,0.691],
    [0.803,0.691,0,{krn: {'127': 0.0278}}],
    // 50 - 5F
    [0.576,0.691,0,{ic: 0.027, krn: {'59': -0.0833, '58': -0.0833}}],
    [0.829,0.691,0.189],
    [0.609,0.691],
    [0.557,0.691,0,{krn: {'127': 0.0278}}],
    [0.493,0.691,0,{ic: 0.111, krn: {'61': -0.0555, '59': -0.0833, '58': -0.0833}}],
    [0.774,0.691],
    [0.646,0.691,0,{ic: 0.0833, krn: {'127': 0.0555, '61': -0.0555, '59': -0.0833, '58': -0.0833}}],
    [0.986,0.691,0,{ic: 0.0555, krn: {'127': 0.0555, '61': -0.0555, '59': -0.0833, '58': -0.0833}}],
    [0.666,0.691,0,{krn: {'127': 0.0555}}],
    [0.555,0.691,0,{ic: 0.0555, krn: {'127': 0.0555, '61': -0.0555, '59': -0.0833, '58': -0.0833}}],
    [0.667,0.691,0,{krn: {'127': 0.0555}}],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 60 - 6F
    [0.388,0.691],
    [0.609,0.459,0,{krn: {'127': 0.0278}}],
    [0.589,0.691],
    [0.487,0.459,0,{krn: {'127': 0.0278}}],
    [0.604,0.691],
    [0.5,0.459,0,{krn: {'127': 0.0278}}],
    [0.42,0.691,0,{krn: {'127': 0.111}}],
    [0.569,0.459,0.189,{krn: {'127': 0.0278}}],
    [0.622,0.691],
    [0.36,0.691],
    [0.332,0.691,0.189],
    [0.556,0.691],
    [0.365,0.691],
    [0.916,0.459],
    [0.664,0.459],
    [0.563,0.459,0,{krn: {'127': 0.0278}}],
    // 70 - 7F
    [0.59,0.459,0.189],
    [0.606,0.459,0.189],
    [0.432,0.459],
    [0.456,0.459,0,{krn: {'127': 0.0278}}],
    [0.417,0.629],
    [0.643,0.459],
    [0.496,0.459],
    [0.812,0.459],
    [0.526,0.459],
    [0.594,0.459,0.189],
    [0.471,0.459,0,{krn: {'127': 0.0278}}],
    [0.333,0.459],
    [0.332,0.459,0.189],
    [0.604,0.459,0,{krn: {'127': 0.0555}}],
    [0,0,0],
    [0,0]
  ]

});
jsMath.Setup.EncodeFont('eurm10');

jsMath.Font.Register({
  name: 'eurm10',
  prefix: 'jsMath-',
  // The test used to see if font is available
  test: jsMath.Font.Test1, testChar: 0x27, testFactor: 2,
  // Can add style, styles, macros here
  tex: function (font,fam) {
    // do browser-specific adjustments here
  },
  fallback: function (font,fam) {
    jsMath.TeX['eurm10'] = jsMath.TeX['cmmi10'];
    jsMath.Setup.Styles({'.typeset .eurm10': jsMath.styles['.typeset .cmmi10']});
  }
});
