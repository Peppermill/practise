/*
* Combine form values into a string, then insert the string into text area
*/
(function() {
	"use strict";
	combineAddress();

	function combineAddress() {
		$(document).ready(function() {

			// Bind click event
		  $(".button-block input").on("click", function() {
		  	// set local var for address
		  	var address = "";
		 	  // iterate thru field values
		 	  $(".field").each(function() {
		 	  	if ($("input", this).length) address += $("input", this).val();
		 	  	else if ($("select option:selected", this).length) address += $("select option:selected", this).text();
		 	  	format($("label", this).attr("for"));
		 	  }); // end each()
		 	 	// insert string into textarea
		 	 	$("#output textarea").val(address);

			  // helper to add formatting to address string
			  function format(fieldLabel) {
			    if (fieldLabel === "address1" || fieldLabel === "city") address += ", ";
			    else if (fieldLabel === "address2") address += "\n";
			    else if (fieldLabel === "state") address += " ";
			  } // end format()

		 	}); // end on()

		}); // end ready()

	} // end combineAddress();
}) (); // end IIFE wrapper