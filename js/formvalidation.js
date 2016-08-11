$(document).ready(function (){
  var validateObj = $("#simpleForm").validate({
    rules:{
      name: { required:true, minlength:5},
      email: { required:true, email:true},
      passowrd1: { required:true, rangelength:[6,12], equalTo:"#password2"},
      birthDate: { requried:true, date:true},
      class: { required:true, rangelength:[2,2]},
      hands: { required:true},
      armor: { required:true, minlength:2}},
    messages: {
      password1: {equalTo:"Passwords Do Not Match"},
      class: { rangelength:"Select 2 Class Types"},
      armor: {minlength:"2 Pieces of Armor Required"},
    },
    errorPlacement: function (error, element){
      if (element.is("radio")){
        error.inserAfter($("input:radio:last").next("label"))
      }
      else if (element.is("checkbox")){
        error.inserAfter($("input:checkbox:last").next("label"))
        }
        else {
          error.inserAfter(element)
        }
    }
  });
  validateObj.form();
  $("form").submit(function (e){
    if(!validateObj.form()){
      alert("Form Errors");
      e.preventDefault();
    }
  });

});
