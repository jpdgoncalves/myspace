<?php require "projects-list.php"; ?>
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
        <img src="/img/home/blur-breathtaking-clouds-1903702.jpg" />
    </div>
    <header>
        <h1 class="logo"><a href="/">Luis Shanigans</a></h1>
        <nav>
            <ul>
                <li><a href="/projects/python">Python</a></li>
                <li><a href="/projects/javascript">Javascript</a></li>
                <li><a href="/projects/java">Java</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <!--GRETTINGS BANNER-->
        <section>
            <h1>Hi there!</h1>
            <p>Welcome to my portfolio! In here i will post all my projects mainly small snipets and fun things i decided to do but also actually useful projects.</p>
            <p>For the time being the projects will consist solely on coding projects separate by programming language</p>
        </section>
        <!--RANDOM CODE SNIPETS AND PROJECTS-->
        <section>
            <h1>Random projects</h1>
            <h2>Python</h2>
            <ul class="cardlist">
                <?php
                $projects = getNRandomProjects(3, "python");
                foreach ($projects as $project) {
                    ?>

                <li class="card">
                    <img src="<?php echo $project["icon"]; ?>" />
                    <a href="<?php echo $project["href"]; ?>">
                        <h3><?php echo $project["name"]; ?></h3>
                        <p><?php echo $project["description"]; ?></p>
                    </a>
                </li>

                <?php
                }
                ?>
            </ul>
            <h2>Javascript</h2>
            <ul class="cardlist">
                <?php
                $projects = getNRandomProjects(3, "javascript");
                foreach ($projects as $project) {
                    ?>

                <li class="card">
                    <img src="<?php echo $project["icon"]; ?>" />
                    <a href="<?php echo $project["href"]; ?>">
                        <h3><?php echo $project["name"]; ?></h3>
                        <p><?php echo $project["description"]; ?></p>
                    </a>
                </li>

                <?php
                }
                ?>
            </ul>
            <h2>Java</h2>
            <ul class="cardlist">
                <?php
                $projects = getNRandomProjects(3, "java");
                foreach ($projects as $project) {
                    ?>

                <li class="card">
                    <img src="<?php echo $project["icon"]; ?>" />
                    <a href="<?php echo $project["href"]; ?>">
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