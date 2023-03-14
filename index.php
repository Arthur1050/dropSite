<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/696170add9.js" crossorigin="anonymous"></script>
    <!-- <link rel="stylesheet" href="https://kit.fontawesome.com/696170add9.css" crossorigin="anonymous"> -->
    <script src="script.js"></script>
    <title>Document</title>
</head>
<link rel="stylesheet" href="style.css">
<body>
    <header>
        
    </header>
    <section id="princSection">
        <div class="backgroundSection"></div>
        <button class="previousImgCarr"><i style="pointer-events: none;" class="fa-solid fa-chevron-left"></i></button>
        <div class="containerCarrosel">
            <div class="carroselPics">
                <?php
                $dir = new DirectoryIterator("./lib/img/png");
    
                foreach ($dir as $key => $fileInfo) {
                    if ($key > 1) {
                ?>
                <div class="imgContainer <?=$key == 4 ? 'viewImg' : ''?>">
                    <div>
                        <img src="./lib/img/png/<?=$fileInfo->getFilename()?>" alt="">
                    </div>
                </div>
                <?php
                    }
                }
                ?>
            </div>
        </div>
        <button class="nextImgCarr"><i style="pointer-events: none;" class="fa-solid fa-chevron-right"></i></button>
    </section>
</body>
</html>
<script>
    
</script>