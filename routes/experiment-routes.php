<?php
require "libs/php/routing.php";

add_route("/pages/experiment", HttpMethods::GET, function () {
    $css_version = "1.0.3";
    $js_version = "1.0.3";
    include "webpages/experiment/experiment.php";
});
add_route("/pages/experiment/", HttpMethods::GET, function () {
    $css_version = "1.0.3";
    $js_version = "1.0.3";
    include "webpages/experiment/experiment.php";
});