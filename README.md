# jquery.lazyloadImage
jquery plugin for lazy load image

<h2>How to use it :</h2>
```
<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="lazyloadImage.js"></script>   
        <script>
            $(document).ready(function(){
                $('.lazy').lazyloadImage();
            });
        </script>
        <style>
            .lazy {
                opacity: 0;
            }
        </style>
    </head>
    
    <body>
        <img src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" 
            data-original="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" 
            class="lazy" width="400" height="300"/>
        <noscript>
            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg"
                alt="Cute Kitten"
                title="Cute Kitten"/>
        </noscript>
    </body>
</html>
```
<h2>NOTE :</h2> 

- don't forget the "lazy" class on ```<img>```
- use ```<noscript>``` for seo issue
- better to define height and width, for browser performance issue and to avoid resize of your page

