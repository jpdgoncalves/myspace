<?php
require "libs/php/routing.php";

add_route("/", HttpMethods::GET, function() {
    $css_version = "1.0.0";
    $js_version = "1.0.0";
    include "webpages/home/home.php";
});