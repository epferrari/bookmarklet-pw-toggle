# Password Toggle bookmarklet

Convenience bookmarklet code for revealing/concealing passwords in webforms that don't provide a "show password" option. Inspired by [Shaun Greiner](https://github.com/shaungreiner) and a form with complicated password requirements I had to fill out today.

## Usage

Copy the following code into your bookmark manager. Instructions for adding a bookmarklet in [Chrome](https://crossbrowsertesting.com/faq/how-do-i-install-bookmarklet-google-chrome-mac-os)


  	javascript:!function(){function t(t){t.setAttribute("data-type-before-pw-toggle","password"),t.type="text"}function e(t){t.removeAttribute("data-type-before-pw-toggle"),t.type="password"}function o(o){"password"===o.type?t(o):"password"===o.dataset.typeBeforePwToggle&&e(o)}function p(){var t=document,e="querySelectorAll";void 0===t[e]?[].map.call(t.getElementsByTagName("input"),o):[].map.call(t[e]('input[type="password"],input[data-type-before-pw-toggle="password"]'),o)}p()}();


## License

MIT
