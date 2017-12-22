$(document).ready(function() {
	$(".delete-link").click(function(e){
		e.preventDefault();
		console.log("edit form ajax function");
		$.ajax({
			method: "DELETE",
			url: $(this).attr("href")
		}).then(function(e){
			window.location.href = "/teams";
		});
	});

	$(".edit-form").submit(function(e){
		e.preventDefault();
		// console.log("edit form ajax function");
		
		$.ajax({
			method: "PUT",
			url: $(this).attr("action"),
			data:{
				name: $("#new-name").val(),
				members: $("#members").val()
				}
			}).done(function(response){
				window.location.href ="/teams";

		});
	});
});
