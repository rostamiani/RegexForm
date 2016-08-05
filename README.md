# RegexForm
An easy regex validation fot HTML forms.

###Usage:
Just add this file to head:

```
<script src="path_to_js_files/jquery.min.js"></script>
<script src="path_to_js_files/regexform.min.js"></script>
```
**No other javascript is needed!**
Just add these data attributes to your input tags:

- data-regexform : Your Regex rule
- data-regexform-alert: The error alert for invalid input

```
<input data-regexform='^0\d[10]$' data-regexform-alert="Invalid mobile phone number" name="Phone" type="text">
```

Then add these data attributes to define regular expression rules

## Please request any feature you need

###In the future
- Show error messages in below input tag instead of showing alertsa
- Bootstrap support
- custom css on error

