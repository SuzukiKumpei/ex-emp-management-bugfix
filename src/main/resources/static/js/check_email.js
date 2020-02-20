
$(function() {
	$('#password').on("keyup", function() {
		check_password();
	});
	
	$('#confirmationPassword').on("keyup", function() {
		check_password();
	});
	
	function check_password(){
		var hostUrl = 'http://localhost:8080/check_password_api/passwordcheck';
		var inputPassword = $("#password").val();
		var inputConfirmationPassword = $("#confirmationPassword").val();
		$.ajax({
			url : hostUrl,
			type : 'POST',
			dataType : 'json',
			data : {
				password : inputPassword,
				confirmationPassword : inputConfirmationPassword
			},
			async: true 
		}).done(function(data) {
			console.log(data);
			console.dir(JSON.stringify(data));
			$("#disagreementMessage").html(data.disagreementMessage);
		}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
			alert("エラーが発生しました！");
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus     : " + textStatus);
			console.log("errorThrown    : " + errorThrown.message);
		});
	}
});