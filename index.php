<!doctype html>
<html lang="en">
<!--
  Created using jsbin.com
  Source can be forked at github.com/landonconover/Assign5
-->
<head>
    <meta charset="utf-8">
    <title>Words To Be Sorted!</title>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="css/myStyle.css">
</head>
<body>
    <a href="https://github.com/you"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub"></a>    <form action="#" method="post" id="theForm">
        <fieldset><legend>Words To Be Sorted!</legend>
            <p>Enter some words to be sorted in the input below. Separate each word with a space. Click the button and you'll see a case-insensitive sort of those words.</p>
            <div><label for="words">Words</label><input type="text" name="words" id="words" required></div>
            <input type="submit" value="Sort!" id="submit">
            <h2>Sorted Words</h2>
            <div id="output"></div>
        </fieldset>
    </form>
    <script src="js/words.js"></script>
</body>
</html>