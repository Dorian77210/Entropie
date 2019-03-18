<html>
    <head>
        <title>Entropie</title>
            <meta charset="UTF-8">
            <script src="http://www.iut-fbleau.fr/projet/maths/?f=pagerank.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>                   
            <script src="./assets/js/data/array-extensions.js"></script>
            <script src="./assets/js/data/extract-data.js"></script>
            <script src="./assets/js/lib/jquery.js"></script>
            <script src="./assets/js/dynamics/redirection.js"></script>     
            <script src="./assets/js/graphs/votes-graph.js"></script>                   

            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <link rel="stylesheet" href="./assets/css/index.css">
    </head>

    <body>
        <header class="w3-container header-container">
            <h2>Mathématiques: Entropie</h1>
            <div class="w3-container w3-bar subjects-container">
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                </ul>
            </div>
        </header>
        <!--<header class="w3-container header-container">
            <div class="w3-container w3-bar subjects-container">
                <ul>
                </ul>
            </div>
        </header> 
-->
        <style type="text/css">
            #chart {
                overflow: auto;
            }
        </style>
        <div class="chart-div">
            <canvas id="global-chart" width="3000" height="750"></canvas>
        </div>

        <div>
            <canvas id="individual-chart" width="3000" height="750"></canvas>
        </div>

        <!--<div class="w3-sidebar w3-red students-container">
            <div class="w3-row w3-section">
                <div class="w3-rest">
                    <input class="w3-input w3-border" name="student-name" type="text" placeholder="Student name">
                </div>
            </div>
            --!>
            <!-- students container-->
        <!--</div>
        
        <div class="w3-modal error-modal">
            <div class="w3-modal-content w3-animate-left w3-card-4">
                <div class="w3-container">
                    <span class="w3-button w3-display-topright">&times;</span>
                        <p>Vous devez sélectionné au moins une matière pour voir les résultats d'un élève.</p>
                </div>
            </div>
        </div>
--!>
    </body>
</html>