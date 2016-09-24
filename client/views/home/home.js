var pageSession = new ReactiveDict();

Template.Home.rendered = function() {
	 $('section, .jumbotron').css('min-height', $(window).height() + 'px'); window.scrollTo(0, 0);

	$(".introduction").typed({
			strings: ["an Entrepreneur.", "a data geek.", "a Full Stack Developer", "an AI nerd", "Karthik"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 0,
			// time before typing starts
			startDelay: 0,
			// backspacing speed
			backSpeed: 0,
			// shuffle the strings
			shuffle: false,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: false,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			backspace: function(curString, curStrPos){
				alert(curString, curStrPos);
				setTimeout(function() {

						// check string array position
						// on the first string, only delete one word
						// the stopNum actually represents the amount of chars to
						// keep in the current string. In my case it's 3.
						if (self.arrayPos == 1){
							self.stopNum = 3;
						}
						//every other time, delete the whole typed string
						else{
							self.stopNum = 0;
						}
			});
			},
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
});
};

Template.Home.events({
	
});

Template.Home.helpers({
	
});

Template.HomeJumbotron.rendered = function() {
	
};

Template.HomeJumbotron.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
	
});

Template.HomeJumbotron.helpers({
	
});

Template.HomeJumbotronJumbotronContent.events({

});

Template.HomeJumbotronJumbotronContent.helpers({

});

Template.HomeSection1.events({

});

Template.HomeSection1.helpers({

});


Template.HomeSection1ThreeColumns.events({

});

Template.HomeSection1ThreeColumns.helpers({

});

Template.HomeSection2.events({

});

Template.HomeSection2.helpers({

});


Template.HomeSection3.events({

});

Template.HomeSection3.helpers({

});


Template.HomeSectionContact.events({

});

Template.HomeSectionContact.helpers({

});


Template.HomeSectionContactContact.rendered = function() {
	

	pageSession.set("homeSectionContactContactInfoMessage", "");
	pageSession.set("homeSectionContactContactErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.HomeSectionContactContact.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("homeSectionContactContactInfoMessage", "");
		pageSession.set("homeSectionContactContactErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var homeSectionContactContactMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(homeSectionContactContactMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("homeSectionContactContactInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("homeSectionContactContactErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call('sendMail', { from: values.email, to: values.email, subject: 'Message from ' + values.name, text: values.message }, function(e) {  if(e) errorAction(e.message); else submitAction('Your message is sent. Thank you for contacting us! :)'); } );
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.HomeSectionContactContact.helpers({
	"infoMessage": function() {
		return pageSession.get("homeSectionContactContactInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("homeSectionContactContactErrorMessage");
	}
	
});
