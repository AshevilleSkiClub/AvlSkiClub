/**
 * Created by pmfarnsw on 7/18/15.
 */
/**
 * collapses navbar when in mobile
 */

$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});