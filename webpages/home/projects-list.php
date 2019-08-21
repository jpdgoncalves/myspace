<?php
 global $projects_list;
 $projects_list = array(
    "python" => array(
        array(
            "name" => "Security",
            "description" => "A small group of scripts for the security course",
            "href" => "#"
        )
    ),
    "javascript" => array(
        array(
            "name" => "Web Development",
            "description" => "A small group of scripts for the web development course",
            "href" => "#"
        )
    ),
    "java" => array(
        array(
            "name" => "Java Development",
            "description" => "A small group of scripts for the java development course",
            "href" => "#"
        )
    )
);

function getNRandomProjects(int $number, string $subject) {

    $projects = getProjects($subject);
    $project_count = sizeof($projects);
    $number =  $project_count < $number ? $project_count : $number;
    $random_keys = array_rand($projects,$number);

    if(is_int($random_keys)) {
        return array($projects[$random_keys]);
    }

    $random_projects = array();

    foreach($random_keys as $key) {
        array_push($random_projects,$projects[$key]);
    }

    return $random_projects;
}

function getProjects(string $subject) {
    
    global $projects_list;
    return $projects_list[$subject];
}