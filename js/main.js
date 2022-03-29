$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $("#main_icon").toggleClass("fa-chevron-circle-right");
});

