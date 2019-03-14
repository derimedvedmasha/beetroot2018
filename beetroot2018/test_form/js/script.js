$(document).ready(function (){
	var list = [];
	var year = new Date();
	for (var i = 1920; i <= year.getFullYear()-18; i++) {
		list.push(i.toString());
	}
	$('._acInput').autocomplete({
		source: list,
		minLength: 0,
		delay: 0
	});


	$('._imgInput').on('click', function() { 
		// if ($(this).val() == '')
			$('._acInput').autocomplete('search', '');
	});

});

$(function() {
		var year = new Date();
	$("form").validate({
	 onfocusout: function(element) {
		this.element(element);  
	},
	rules: {
		birth: {
			required: true,
			min: 1920,
			max: year.getFullYear()-18,
		},
		email: {
			required: true,
			email: true,
		},
		password: {
			required: true,
			minlength: 5
		},
		code: {
			required: true,
		}
	},
	messages: {
		birth: {
			required: "This field can't be empty",
			max: "You must be at least 18 year old",
		},
		email: {
			required: "This field can't be empty",
			email: "Please include an '@' in the email address"
		},
		password: {
			required: "This field can't be empty",
		},
		code: "This field can't be empty",
	},
	submitHandler: function(form) {
	console.log("Form is valid!")
	}
	});
});