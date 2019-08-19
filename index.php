<?php
require "libs/php/routing.php";

add_route("/pages/home", HttpMethods::GET, function () {
    $css_version = "1.0.3";
    $js_version = "1.0.3";
    $base_path = "../";
    include "webpages/home/home.php";
});
add_route("/pages/home/", HttpMethods::GET, function () {
    $css_version = "1.0.3";
    $js_version = "1.0.3";
    $base_path = "../../";
    include "webpages/home/home.php";
});

process_request();