<?php require "projects-list.php";
?>

<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/libs/css/reset.css?v=<?php echo $css_version ?>" />
    <link rel="stylesheet" href="/css/home/home.css?v=<?php echo $css_version ?>" />
    <script type="module" src="/js/home/home.js?v=<?php echo $js_version ?>"></script>
</head>

<body>
    <div class="background">
    </div>
    <header>
        <h1 class="logo"><a href="/">Luis Shanigans</a></h1>
        <nav>
            <ul id="navigation">
                <li><a href="/projects/python">Python</a></li>
                <li><a href="/projects/javascript">Javascript</a></li>
                <li><a href="/projects/java">Java</a></li>
                <li><a href="/projects/cpp">C++</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h1><?php echo ucwords($project_subject . " projects"); ?></h1>
            <ul class="cardlist">
                <?php
                $projects = getProjects($project_subject);
                foreach ($projects as $project) {
                    ?>

                <li class="card">
                    <a href="<?php echo $project["href"]; ?>">
                        <img src="<?php echo $project["icon"]; ?>" />
                        <h3><?php echo $project["name"]; ?></h3>
                        <p><?php echo $project["description"]; ?></p>
                    </a>
                </li>

                <?php
                }
                ?>
            </ul>
        </section>
    </main>
    <footer>
        <section>
            <address>
                <p>Made by: <span>Luis Ferreira</span></p>
                <p>Email: <span>apenaspara1998@gmail.com</span></p>
            </address>
        </section>
    </footer>
</body>

</html>