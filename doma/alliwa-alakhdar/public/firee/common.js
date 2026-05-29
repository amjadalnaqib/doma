var firebaseConfig = {
  apiKey: "AIzaSyBjF9-BvodLyWsefl9-YDCaDrPOPkn4Ke0",
  authDomain: "alliwa-alakhdar.firebaseapp.com",
  projectId: "alliwa-alakhdar",
  storageBucket: "alliwa-alakhdar.firebasestorage.app",
  messagingSenderId: "972468878044",
  appId: "1:972468878044:web:722384b1c4bad3d138d219"
};

firebase.initializeApp(firebaseConfig);

$(document).keypress(function(event){
				
	var element = event.target;
	
	if(element.type == "number" || element.type == "tel"){
		
		var key = window.event.keyCode || event.which || event.charCode;
	
		return key <= 31 || (key >= 48 && key <= 57);
	}
});

$(document).on("input", function(event){
				
	var element = event.target;
	
	validateElement(element);
});

function validateElement(element){
	
	if($(element).val() == null || $(element).val().length == 0){
		
		if($(element).attr("required") != null){
			
			return setMessage(element, "الرجاء ادخال " + $(element).attr("placeholder"));
		}
	
	}else{
		
		if($(element).hasClass("name")){
			
			if($(element).val().trim().split(" ").length <= 2){
				
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يتكون من ثلاث أسماء");
			}
		}
		
		if($(element).hasClass("mobile")){
			
			if(!$(element).val().startsWith("3") && !$(element).val().startsWith("6")){
				
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يبدأ ب 3 أو 6");
			}
			
			if($(element).val().length != 8){
				
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يتكون من ثمان أرقام");
			}
		}
		
		if($(element).attr("min") != null){
			
			var min = $(element).attr("min");
			
			if(Number($(element).val()) < Number(min)){
			
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يكون أكبر من أو يساوي " + min);
			}
		}

		if($(element).attr("max") != null){
			
			var max = $(element).attr("max");
			
			if(Number($(element).val()) > Number(max)){
			
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يكون أصغر من أو يساوي " + max);
			}
		}
		
		if($(element).attr("type") == "email"){

			var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if(!expression.test($(element).val())){
				
				return setMessage(element, $(element).attr("placeholder") + " المدخل غير صحيح");
			}
		}
		
		if($(element).attr("same") != null){
			
			var other = $(element).attr("same");
			
			if($("#" + other).val() != $(element).val()){
				
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يطابق " + $("#" + other).attr("placeholder"));
			}
		}
		
		if($(element).attr("different") != null){
			
			var other = $(element).attr("different");
			
			if($("#" + other).val() == $(element).val()){
				
				return setMessage(element, $(element).attr("placeholder") + " يجب أن لا يطابق " + $("#" + other).attr("placeholder"));
			}
		}
	}
	
	return setMessage(element, null);
}

function setMessage(element, message) {

	if($(element).closest(".form-group").find(".invalid-feedback").length == 0){
		
		$(element).closest(".form-group").append("<div class='invalid-feedback'></div>");
		
	}else{
		
		$(element).closest(".form-group").find(".invalid-feedback").html(message);
	}
	
	if (message != null) {
		
		$(element).removeClass("is-valid");
		$(element).addClass("is-invalid");

	} else {
		
		$(element).removeClass("is-invalid");
		$(element).addClass("is-valid");
	}
	
	return message;
}

function isValidForm() {

	var result = null;
	
	$($(":input").get().reverse()).each(function(){
		
		var message = validateElement($(this));
		
		if(message != null){
			
			result = message;
			
			$(this).focus();
		}
	});
	
	return result;
}

isValidForm();