import suneditor from 'suneditor';
import ro from 'suneditor/src/lang/ro.js';
import { link, align, fontSize, fontColor, hiliteColor, blockquote, horizontalRule, list, table, template, lineHeight } from 'suneditor/src/plugins';
export default function editor(el, opt = {}, value = '') {
 const opts = {
  templates: [{ name: 'Gol', html: '<p></p>' }],
  lang: ro,
  value: value || opt.value,
  width: '100%',
  maxHeight: opt.maxHeight || '200px',
  plugins: [link, align, fontSize, fontColor, hiliteColor, blockquote, horizontalRule, list, table, template, lineHeight],
  display: 'block',
  popupDisplay: 'full',
  charCounter: true,
  lineHeights: [
   { text: 'Normal', value: 1 },
   { text: 'Dublu', value: 2 },
   { text: 'Mare', value: 3 },
  ],
  charCounterLabel: 'Chars:',
  buttonList: [
   ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'removeFormat'],
   ['fontSize'],
   ['blockquote', 'outdent', 'indent'],
   ['align', 'horizontalRule', 'list', 'lineHeight'],
   ['table', 'link'],
   ['showBlocks', 'preview', 'print'],
   ['save', 'template'],
   ['fullScreen'],
   [
    '%660',
    [
     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'removeFormat'],
     ['blockquote', 'outdent', 'indent'],
     ['align', 'horizontalRule', 'list'],
     ['table', 'link'],
     ['showBlocks', 'preview', 'print'],
     ['fullScreen'],
     ['-right', ':i-More Misc-default.more_plus', 'fontSize', 'save', 'template'],
    ],
   ],
   [
    '%530',
    [
     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'removeFormat'],
     ['blockquote', 'outdent', 'indent'],
     ['align', 'horizontalRule', 'list'],
     ['table', 'link'],
     ['fullScreen'],
     ['-right', ':i-More Misc-default.more_plus', 'fontSize', 'showBlocks', 'preview', 'print', 'save', 'template'],
    ],
   ],
   [
    '%460',
    [
     ['bold', 'underline', 'italic'],
     ['blockquote', 'outdent', 'indent'],
     ['align', 'horizontalRule', 'list'],
     ['table', 'link'],
     ['fullScreen'],
     ['-right', ':i-More Misc-default.more_plus', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'removeFormat', 'fontSize', 'showBlocks', 'preview', 'print', 'save', 'template'],
    ],
   ],
   [
    '%328',
    [
     ['bold', 'underline', 'italic'],
     ['align', 'horizontalRule', 'list'],
     ['fullScreen'],
     ['-right', ':i-More Misc-default.more_plus', 'blockquote', 'outdent', 'indent', 'table', 'link', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'removeFormat', 'fontSize', 'showBlocks', 'preview', 'print', 'save', 'template'],
    ],
   ],
   [
    '%200',
    [
     ['bold', 'underline', 'italic'],
     ['fullScreen'],
     ['-right', ':i-More Misc-default.more_plus', 'blockquote', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table', 'link', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'removeFormat', 'fontSize', 'showBlocks', 'preview', 'print', 'save', 'template'],
    ],
   ],
  ],
 };
 return suneditor.create(el, Object.assign(opts, opt));
}
// templates: [{  name: 'Template-1',  html: '<p>HTML source1</p>', }, {  name: 'Template-2',  html: '<p>HTML source2</p>', }]
// callBackSave: function (contents, isChanged) { console.log(contents, isChanged);}
