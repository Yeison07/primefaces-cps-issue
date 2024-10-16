$(document).ready(function(){
	$(".sidebar-dropdown > a").click(function() {
		  $(".sidebar-submenu").slideUp(200);
		  if (
		    $(this)
		      .parent()
		      .hasClass("active")
		  ) {
		    $(".sidebar-dropdown").removeClass("active");
		    $(this)
		      .parent()
		      .removeClass("active");
		  } else {
		    $(".sidebar-dropdown").removeClass("active");
		    $(this)
		      .next(".sidebar-submenu")
		      .slideDown(200);
		    $(this)
		      .parent()
		      .addClass("active");
		  }
		});

		$("#close-sidebar").click(function() {
		  $(".page-wrapper").removeClass("toggled");
		  $(".page-wrapper").addClass("oculto");
		  $(".navbar-user").removeClass("hidden");
		  $(this).hide();
		});
		$("#show-sidebar").click(function() {
		  $(".page-wrapper").addClass("toggled");
		  $(".page-wrapper").removeClass("oculto");
		  $("#close-sidebar").show("slow");
		  $(".navbar-user").addClass("hidden");
	});
});


