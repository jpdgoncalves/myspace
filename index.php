<?php
require "libs/php/routing.php";

add_route("/", HttpMethods::GET, function () {
    include "home.php";
});

process_request();