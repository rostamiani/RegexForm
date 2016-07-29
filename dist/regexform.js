	// Add these attributes to the input tag
	// Regex Rule: data-regexform
	// Message:    data-regexform-alert
$(document).ready(function() {
	$('input[data-regexform]').change(function(event) 
	{
		// Get validation data
		var rex = $(this).data('regexform');
		if ($(this).is('[data-regexform-alert]'))
			var msgAlert = $(this).data('regexform-alert');
		else
			var msgAlert = null;

		// Get input text
		var text = $(this).val();
		var regex = new RegExp(rex);

		if (! regex.test(text))
		{
			$(this).css('backgroundColor', '#F88');
			$(this).data('regexform-error', '1');
			if (msgAlert != null)
			{
				alert(msgAlert);
			}

			// Add restrictions to the form
			var myform = $(this).closest('form');
			$(myform).submit(function() {
				
				// If there is some errors, do not submit
				if ( $(myform).find('input').filter( function() {return $(this).data('regexform-error'); }).length > 0 )
				{
					alert('There is some problems in form.');
					return false;
				}
			});
		}
		else
		{
			$(this).css('backgroundColor', 'white');
			$(this).removeData('regexform-error');
		}
	});
});
