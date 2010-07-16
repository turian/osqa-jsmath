/*
 *  eurb10/def.js
 *  
 *  This file loads the  font into jsMath. To do this use
 *  
 *      <SCRIPT>jsMath.Font.Load("eurb10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the eurb10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not 
 *  customized on a per-browser basis as it probably should be.
 *  
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *  
 *  Once this file is loaded, you can use \char{eurb10}{nn} to access
 *  any character in the font.  In addition, the \eurb10 macro will switch to
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

  eurb10: [
    // 00 - 0F
    [0.536,0.702,0,{ic: 0.0612, krn: {'61': -0.0612, '59': -0.0917, '58': -0.0917}}],
    [0.783,0.702,0,{krn: {'127': 0.0306}}],
    [0.969,0.702,0,{krn: {'127': 0.0306}}],
    [0.848,0.702,0,{krn: {'127': 0.0306}}],
    [0.653,0.702],
    [0.845,0.702,0,{krn: {'127': 0.0306}}],
    [0.713,0.702],
    [0.794,0.702,0,{krn: {'127': 0.0306}}],
    [0.974,0.702],
    [0.782,0.702,0,{krn: {'127': 0.0306}}],
    [0.96,0.702],
    [0.715,0.486],
    [0.7,0.702,0.189],
    [0.646,0.486,0.189],
    [0.584,0.702],
    [0.588,0.486],
    // 10 - 1F
    [0.524,0.702,0.126,{krn: {'127': 0.0612}}],
    [0.652,0.486,0.189],
    [0.649,0.702,0,{krn: {'127': 0.0306}}],
    [0.354,0.486],
    [0.583,0.486],
    [0.596,0.702,0,{krn: {'127': -0.0612}}],
    [0.646,0.486,0.189],
    [0.639,0.486],
    [0.588,0.702,0.126],
    [0.664,0.486,0,{krn: {'127': 0.0612}}],
    [0.611,0.486,0.189,{krn: {'127': 0.0306}}],
    [0.7,0.486],
    [0.581,0.486,0,{krn: {'127': 0.0612}}],
    [0.622,0.486],
    [0.874,0.702,0.189],
    [0.588,0.486,0.189],
    // 20 - 2F
    [0.822,0.702,0.189,{krn: {'127': 0.0306}}],
    [0.973,0.486,0,{krn: {'127': 0.0306}}],
    [0.532,0.486],
    [0.639,0.702],
    [0.933,0.629],
    [0,0,0],
    [0,0,0],
    [0.817,0.486,0,{krn: {'127': 0.0306}}],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 30 - 3F
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.55,0.702],
    [0.306,0.108],
    [0.306,0.108],
    [0.363,0.486],
    [0.553,0.749,0.25,{krn: {'65': -0.0612, '97': -0.0612, '103': -0.0612, '1': -0.0612, '3': -0.0612, '11': -0.0612}}],
    [0.361,0.486],
    [0,0,0],
    // 40 - 4F
    [0.643,0.702],
    [0.83,0.702],
    [0.726,0.702],
    [0.789,0.702,0,{krn: {'127': 0.0612}}],
    [0.9,0.702],
    [0.641,0.702],
    [0.525,0.702,0,{krn: {'61': -0.0612, '59': -0.0917, '58': -0.0917}}],
    [0.846,0.702,0,{krn: {'127': 0.0306}}],
    [0.857,0.702,0,{krn: {'127': 0.0306}}],
    [0.461,0.702],
    [0.458,0.702,0.126],
    [0.748,0.702],
    [0.621,0.702],
    [1.16,0.702],
    [0.922,0.702],
    [0.882,0.702,0,{krn: {'127': 0.0306}}],
    // 50 - 5F
    [0.665,0.702,0,{krn: {'59': -0.0917, '58': -0.0917}}],
    [0.919,0.702,0.189],
    [0.714,0.702],
    [0.655,0.702,0,{krn: {'127': 0.0306}}],
    [0.543,0.702,0,{ic: 0.122, krn: {'61': -0.0612, '59': -0.0917, '58': -0.0917}}],
    [0.859,0.702],
    [0.745,0.702,0,{ic: 0.0612, krn: {'127': 0.0612, '61': -0.0612, '59': -0.0917, '58': -0.0917}}],
    [1.13,0.702,0,{ic: 0.0306, krn: {'127': 0.0612, '61': -0.0612, '59': -0.0917, '58': -0.0917}}],
    [0.737,0.702,0,{krn: {'127': 0.0612}}],
    [0.584,0.702,0,{ic: 0.0917, krn: {'127': 0.0612, '61': -0.0612, '59': -0.0917, '58': -0.0917}}],
    [0.734,0.702,0,{krn: {'127': 0.0612}}],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 60 - 6F
    [0.411,0.702],
    [0.665,0.486,0,{krn: {'127': 0.0306}}],
    [0.673,0.702],
    [0.549,0.486,0,{krn: {'127': 0.0306}}],
    [0.673,0.702],
    [0.614,0.486,0,{krn: {'127': 0.0306}}],
    [0.431,0.702,0,{krn: {'127': 0.122}}],
    [0.658,0.486,0.189,{krn: {'127': 0.0306}}],
    [0.665,0.702],
    [0.367,0.702],
    [0.363,0.702,0.189],
    [0.611,0.702],
    [0.369,0.702],
    [0.989,0.486],
    [0.671,0.486],
    [0.673,0.486,0,{krn: {'127': 0.0306}}],
    // 70 - 7F
    [0.663,0.486,0.189],
    [0.672,0.486,0.189],
    [0.497,0.486],
    [0.499,0.486,0,{krn: {'127': 0.0306}}],
    [0.437,0.629],
    [0.67,0.486],
    [0.546,0.486],
    [0.919,0.486],
    [0.55,0.486],
    [0.67,0.486,0.189],
    [0.545,0.486,0,{krn: {'127': 0.0306}}],
    [0.367,0.486],
    [0.367,0.486],
    [0.675,0.486,0,{krn: {'127': 0.0612}}],
    [0,0,0],
    [0,0]
  ]

});
jsMath.Setup.EncodeFont('eurb10');

jsMath.Font.Register({
  name: 'eurb10',
  prefix: 'jsMath-',
  // The test used to see if font is available
  test: jsMath.Font.Test1, testChar: 0x27, testFactor: 2,
  // Can add style, styles, macros here
  tex: function (font,fam) {
    // do browser-specific adjustments here
  },
  fallback: function (font,fam) {
    jsMath.TeX['eurb10'] = jsMath.TeX['cmmi10'];
    jsMath.Setup.Styles({'.typeset .eurb10': jsMath.styles['.typeset .cmmi10']});
  }
});
