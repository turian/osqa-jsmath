/*
 *  cmmib10/def.js
 *  
 *  This file loads the cmmib10 font into jsMath. To do this use
 *  
 *      <SCRIPT>jsMath.Font.Load("cmmib10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the cmmib10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not 
 *  customized on a per-browser basis as it probably should be.
 *  
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *  
 *  Once this file is loaded, you can use \char{cmmib10}{nn} to access
 *  any character in the font.  In addition, the \cmmib10 macro will switch to
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

  cmmib10: [
    // 00 - 0F
    [0.657,0.686,0,{ic: 0.16, krn: {'61': -0.0639, '59': -0.128, '58': -0.128, '127': 0.0958}}],
    [0.958,0.686,0,{krn: {'127': 0.192}}],
    [0.867,0.686,0,{ic: 0.0319, krn: {'127': 0.0958}}],
    [0.806,0.686,0,{krn: {'127': 0.192}}],
    [0.841,0.686,0,{ic: 0.0746, krn: {'127': 0.0958}}],
    [0.982,0.686,0,{ic: 0.0823, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0639}}],
    [0.885,0.686,0,{ic: 0.0545, krn: {'127': 0.0958}}],
    [0.671,0.686,0,{ic: 0.16, krn: {'61': -0.0639, '59': -0.128, '58': -0.128, '127': 0.0639}}],
    [0.767,0.686,0,{krn: {'127': 0.0958}}],
    [0.714,0.686,0,{ic: 0.117, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0639}}],
    [0.879,0.686,0,{ic: 0.0483, krn: {'127': 0.0958}}],
    [0.761,0.444,0,{krn: {'127': 0.0319}}],
    [0.66,0.694,0.194,{ic: 0.034, krn: {'127': 0.0958}}],
    [0.59,0.444,0.194,{ic: 0.0639}],
    [0.522,0.694,0,{ic: 0.0382, krn: {'59': -0.0639, '58': -0.0639, '127': 0.0639}}],
    [0.483,0.444,0,{krn: {'127': 0.0639}}],
    // 10 - 1F
    [0.508,0.694,0.194,{ic: 0.0622, krn: {'127': 0.0958}}],
    [0.6,0.444,0.194,{ic: 0.037, krn: {'127': 0.0639}}],
    [0.562,0.694,0,{ic: 0.0319, krn: {'127': 0.0958}}],
    [0.412,0.444,0,{krn: {'127': 0.0639}}],
    [0.668,0.444],
    [0.671,0.694],
    [0.708,0.444,0.194,{krn: {'127': 0.0319}}],
    [0.577,0.444,0,{ic: 0.069, krn: {'59': -0.0639, '58': -0.0639, '127': 0.0319}}],
    [0.508,0.694,0.194,{ic: 0.0302, krn: {'127': 0.128}}],
    [0.682,0.444,0,{ic: 0.037}],
    [0.612,0.444,0.194,{krn: {'127': 0.0958}}],
    [0.686,0.444,0,{ic: 0.037, krn: {'59': -0.0639, '58': -0.0639}}],
    [0.521,0.444,0,{ic: 0.135, krn: {'59': -0.0639, '58': -0.0639, '127': 0.0319}}],
    [0.631,0.444,0,{ic: 0.037, krn: {'127': 0.0319}}],
    [0.712,0.694,0.194,{krn: {'127': 0.0958}}],
    [0.718,0.444,0.194,{krn: {'127': 0.0639}}],
    // 20 - 2F
    [0.758,0.694,0.194,{ic: 0.037, krn: {'127': 0.128}}],
    [0.718,0.444,0,{ic: 0.037}],
    [0.529,0.444,0,{krn: {'127': 0.0958}}],
    [0.692,0.694,0,{krn: {'127': 0.0958}}],
    [0.975,0.444,0,{ic: 0.0319}],
    [0.612,0.444,0.194,{krn: {'127': 0.0958}}],
    [0.424,0.444,0.0972,{ic: 0.0792, krn: {'127': 0.0958}}],
    [0.747,0.444,0.194,{krn: {'127': 0.0958}}],
    [1.15,0.391,-0.109],
    [1.15,0.391,-0.109],
    [1.15,0.391,-0.109],
    [1.15,0.391,-0.109],
    [0.319,0.502,0.00222],
    [0.319,0.502,0.00222],
    [0.575,0.472,-0.0278],
    [0.575,0.472,-0.0278],
    // 30 - 3F
    [0.575,0.444],
    [0.575,0.444],
    [0.575,0.444],
    [0.575,0.444,0.194],
    [0.575,0.444,0.194],
    [0.575,0.444,0.194],
    [0.575,0.644],
    [0.575,0.444,0.194],
    [0.575,0.644],
    [0.575,0.444,0.194],
    [0.319,0.156],
    [0.319,0.156,0.194],
    [0.894,0.586,0.0856],
    [0.575,0.75,0.25,{krn: {'1': -0.0639, '65': -0.0639, '77': -0.0639, '78': -0.0639, '89': 0.0639, '90': -0.0639}}],
    [0.894,0.586,0.0856],
    [0.575,0.472,-0.0278],
    // 40 - 4F
    [0.628,0.694,0,{ic: 0.0639, krn: {'127': 0.0958}}],
    [0.869,0.686,0,{krn: {'127': 0.16}}],
    [0.866,0.686,0,{ic: 0.0483, krn: {'127': 0.0958}}],
    [0.817,0.686,0,{ic: 0.0698, krn: {'61': -0.0319, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.938,0.686,0,{ic: 0.0319, krn: {'127': 0.0639}}],
    [0.81,0.686,0,{ic: 0.0545, krn: {'127': 0.0958}}],
    [0.689,0.686,0,{ic: 0.16, krn: {'61': -0.0639, '59': -0.128, '58': -0.128, '127': 0.0958}}],
    [0.887,0.686,0,{krn: {'127': 0.0958}}],
    [0.982,0.686,0,{ic: 0.0823, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0639}}],
    [0.511,0.686,0,{ic: 0.0778, krn: {'127': 0.128}}],
    [0.631,0.686,0,{ic: 0.101, krn: {'61': -0.0639, '59': -0.128, '58': -0.128, '127': 0.192}}],
    [0.971,0.686,0,{ic: 0.0698, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0639}}],
    [0.756,0.686,0,{krn: {'127': 0.0319}}],
    [1.14,0.686,0,{ic: 0.114, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.95,0.686,0,{ic: 0.114, krn: {'61': -0.0958, '61': -0.0319, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.837,0.686,0,{ic: 0.0319, krn: {'127': 0.0958}}],
    // 50 - 5F
    [0.723,0.686,0,{ic: 0.16, krn: {'61': -0.0639, '59': -0.128, '58': -0.128, '127': 0.0958}}],
    [0.869,0.686,0.194,{krn: {'127': 0.0958}}],
    [0.872,0.686,0,{ic: 0.00421, krn: {'127': 0.0958}}],
    [0.693,0.686,0,{ic: 0.0538, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.637,0.686,0,{ic: 0.16, krn: {'61': -0.0319, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.8,0.686,0,{ic: 0.114, krn: {'59': -0.128, '58': -0.128, '61': -0.0639, '127': 0.0319}}],
    [0.678,0.686,0,{ic: 0.256, krn: {'59': -0.192, '58': -0.192, '61': -0.128}}],
    [1.09,0.686,0,{ic: 0.16, krn: {'59': -0.192, '58': -0.192, '61': -0.128}}],
    [0.947,0.686,0,{ic: 0.0778, krn: {'61': -0.0958, '61': -0.0319, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.675,0.686,0,{ic: 0.256, krn: {'59': -0.192, '58': -0.192, '61': -0.128}}],
    [0.773,0.686,0,{ic: 0.0698, krn: {'61': -0.0639, '59': -0.0639, '58': -0.0639, '127': 0.0958}}],
    [0.447,0.75],
    [0.447,0.694,0.194],
    [0.447,0.694,0.194],
    [1.15,0.361,-0.139],
    [1.15,0.361,-0.139],
    // 60 - 6F
    [0.474,0.694,0,{krn: {'127': 0.128}}],
    [0.633,0.444],
    [0.521,0.694],
    [0.513,0.444,0,{krn: {'127': 0.0639}}],
    [0.61,0.694,0,{krn: {'89': 0.0639, '90': -0.0639, '106': -0.128, '102': -0.192, '127': 0.192}}],
    [0.554,0.444,0,{krn: {'127': 0.0639}}],
    [0.568,0.694,0.194,{ic: 0.11, krn: {'59': -0.0639, '58': -0.0639, '127': 0.192}}],
    [0.545,0.444,0.194,{ic: 0.037, krn: {'127': 0.0319}}],
    [0.668,0.694,0,{krn: {'127': -0.0319}}],
    [0.405,0.693],
    [0.471,0.693,0.194,{ic: 0.0622, krn: {'59': -0.0639, '58': -0.0639}}],
    [0.604,0.694,0,{ic: 0.0185}],
    [0.348,0.694,0,{ic: 0.0088, krn: {'127': 0.0958}}],
    [1.03,0.444],
    [0.713,0.444],
    [0.585,0.444,0,{krn: {'127': 0.0639}}],
    // 70 - 7F
    [0.601,0.444,0.194,{krn: {'127': 0.0958}}],
    [0.542,0.444,0.194,{ic: 0.037, krn: {'127': 0.0958}}],
    [0.529,0.444,0,{ic: 0.0319, krn: {'59': -0.0639, '58': -0.0639, '127': 0.0639}}],
    [0.531,0.444,0,{krn: {'127': 0.0639}}],
    [0.415,0.635,0,{krn: {'127': 0.0958}}],
    [0.681,0.444,0,{krn: {'127': 0.0319}}],
    [0.567,0.444,0,{ic: 0.037, krn: {'127': 0.0319}}],
    [0.831,0.444,0,{ic: 0.0278, krn: {'127': 0.0958}}],
    [0.659,0.444,0,{krn: {'127': 0.0319}}],
    [0.59,0.444,0.194,{ic: 0.037, krn: {'127': 0.0639}}],
    [0.555,0.444,0,{ic: 0.0421, krn: {'127': 0.0639}}],
    [0.394,0.444,0,{krn: {'127': 0.0319}}],
    [0.439,0.444,0.194,{krn: {'127': 0.0958}}],
    [0.74,0.444,0.194,{krn: {'127': 0.128}}],
    [0.575,0.724,0,{ic: 0.155}],
    [0.319,0.694,0,{ic: 0.45}]
  ]

});
jsMath.Setup.EncodeFont('cmmib10');

jsMath.Font.Register({
  name: 'cmmib10',
  prefix: 'jsMath-',
  // The test used to see if font is available
  test: jsMath.Font.Test1, testChar: 0x27, testFactor: 2,
  // Can add style, styles, macros here
  tex: function (font,fam) {
    // do browser-specific adjustments here
  },
  symbol: function (font,fam) {
    jsMath.Setup.Styles({'.typeset .cmmib10': 'font-family: serif; font-weight: bold; font-style: italic'});
    return [
      0,  1,  2,  3,  4,  5,  6,  7,    8,  9, 10, 11, 12, 13, 14, 15,
     16, 17, 18, 19, 20, 21, 22, 23,   24, 25, 26, 27, 28, 29, 30, 31,
     32, 33, 34, 35, 36, 37, 38, 39,   40, 41, 42, 43, 44, 45, 46, 47,
     48, 49, 50, 51, 52, 53, 54, 55,   56, 57, 58, 59, 60, 61, 62, 63,
     64, 
                                                   91, 92, 93, 94, 95,
     96,
                                                  123,124,125,126,127
    ];
  },
  fallback: function (font,fam) {
    jsMath.TeX['cmmib10'] = jsMath.TeX['cmbx10'];
    jsMath.Setup.Styles({'.typeset .cmmib10': jsMath.styles['.typeset .cmbx10']});
  }
});
