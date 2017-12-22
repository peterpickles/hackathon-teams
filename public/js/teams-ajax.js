$(document).ready(function() {
	$(".delete-link").click(function(e){
		e.preventDefault();

		$.ajax({
			method: "DELETE",
			url: $(this).attr("href")
		}).then(function(e){
			window.location.href = "/teams";
		});
	});
});
