// Business Logic for Contacts ---------
function Contact(firstName, lastName ) {
  this.firstName = firstName;
  this.lastName =  lastName;

}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//user Interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    debugger;
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputFirstName.toUpperCase(), inputLastName.toUpperCase());

$("ul#contactList").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

 $(".contact").last().click(function() {
   $("#show-contact").show();
   $("#show-contact h2").text(newContact.fullName());
   $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
 });
 $("input#new-first-name").val("");
   $("input#new-last-name").val("");
  });
});
