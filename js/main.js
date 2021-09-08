$(document).ready(function () {

  $(document).on('click', function (e) {
    var container = $("#sidebar");
    var sidebarCollapse = $('#sidebarCollapse');
    if (!container.hasClass('active') || container.css('position') !== 'fixed') return;
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 && sidebarCollapse.has(e.target).length === 0 && !sidebarCollapse.is(e.target)) {
      container.removeClass("active");
    }
  });

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    // $(this).toggleClass("active");
  });
});

