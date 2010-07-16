/*
 *  eufm10/def.js
 *  
 *  This file loads the  font into jsMath. To do this use
 *  
 *      <SCRIPT>jsMath.Font.Load("eufm10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the eufm10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not 
 *  customized on a per-browser basis as it probably should be.
 *  
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *  
 *  Once this file is loaded, you can use \char{eufm10}{nn} to access
 *  any character in the font.  In addition, the \eufm10 macro will switch to
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

  eufm10: [
    // 00 - 0F
    [0.497,0.621],
    [0.498,0.621],
    [0.333,0.691,0.189],
    [0.329,0.691,0.189],
    [0.503,0.475,0.189],
    [0.333,0.691],
    [0.334,0.621],
    [0.501,0.475],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 10 - 1F
    [0,0,0],
    [0,0,0],
    [0.215,0.691],
    [0.215,0.691],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 20 - 2F
    [0,0,0],
    [0.296,0.691],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0.738,0.691],
    [0.212,0.691],
    [0.389,0.749,0.25],
    [0.389,0.749,0.25],
    [0.278,0.621],
    [0.756,0.583,0.0832],
    [0.278,0.108],
    [0.756,0.583,0.0832],
    [0.278,0.108],
    [0.502,0.749,0.25],
    // 30 - 3F
    [0.502,0.475],
    [0.502,0.475],
    [0.502,0.475],
    [0.502,0.475,0.189],
    [0.502,0.475,0.189],
    [0.502,0.475,0.189],
    [0.502,0.691],
    [0.502,0.475,0.189],
    [0.502,0.691],
    [0.502,0.475,0.189],
    [0.216,0.475],
    [0.216,0.475,0.126],
    [0,0,0],
    [0.756,0.369,-0.131],
    [0,0,0],
    [0.362,0.691],
    // 40 - 4F
    [0,0,0],
    [0.718,0.691],
    [0.884,0.691],
    [0.613,0.691],
    [0.832,0.691],
    [0.663,0.691],
    [0.611,0.691,0.126],
    [0.785,0.691],
    [0.72,0.691,0.063],
    [0.554,0.691],
    [0.552,0.691,0.126],
    [0.668,0.691],
    [0.666,0.691],
    [1.05,0.691],
    [0.832,0.691],
    [0.827,0.691],
    // 50 - 5F
    [0.828,0.691,0.189],
    [0.827,0.691,0.0378],
    [0.828,0.691],
    [0.829,0.691],
    [0.669,0.691],
    [0.646,0.691],
    [0.831,0.691],
    [1.05,0.691],
    [0.719,0.691],
    [0.833,0.691,0.189],
    [0.602,0.691,0.126],
    [0.278,0.749,0.25],
    [0,0,0],
    [0.278,0.749,0.25],
    [0.5,0.691],
    [0,0,0],
    // 60 - 6F
    [0,0,0],
    [0.5,0.475],
    [0.513,0.691],
    [0.389,0.475],
    [0.499,0.621],
    [0.401,0.475],
    [0.326,0.691,0.189],
    [0.504,0.475,0.189],
    [0.521,0.691,0.189],
    [0.279,0.691],
    [0.281,0.691],
    [0.389,0.691],
    [0.28,0.691],
    [0.767,0.475],
    [0.527,0.475],
    [0.489,0.475],
    // 70 - 7F
    [0.5,0.524,0.189],
    [0.489,0.475,0.189],
    [0.389,0.475],
    [0.443,0.475],
    [0.333,0.621],
    [0.517,0.475],
    [0.512,0.524],
    [0.774,0.524],
    [0.389,0.475,0.189],
    [0.499,0.475,0.189],
    [0.391,0.475,0.189],
    [0,0,0],
    [0,0,0],
    [0.215,0.691],
    [0,0,0],
    [0.378,0.691]
  ]

});
jsMath.Setup.EncodeFont('eufm10');

jsMath.Font.Register({
  name: 'eufm10',
  prefix: 'jsMath-',
  style: 'font-family: jsMath-eufm10, cursive',
  // The test used to see if font is available
  test: jsMath.Font.Test2, testChar: 0x7D, testFactor: 1.8,
  // Can add style, styles, macros here
  tex: function (font,fam) {
    // do browser-specific adjustments here
  },
  fallback: function (font,fam) {
    jsMath.Update.TeXfonts({
      eufm10: {
        '0': {c: 'd'},
        '1': {c: 'd'},
        '2': {c: 'f'},
        '3': {c: 'f'},
        '4': {c: 'g'},
        '5': {c: 't'},
        '6': {c: 't'},
        '7': {c: 'u'},
        '18': {c: '&#x2018;'},
        '19': {c: '&#x2019;'},
        '125': {c: '"'},
        '127': {c: '1'}
      }
    });
  }
});
