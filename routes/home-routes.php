<?php
require "libs/php/routing.php";

add_route("/", HttpMethods::GET, function() {
    $css_version = "1.0.1";
    $js_version = "1.0.1";
    include "webpages/home/home.php";
});