var headerAnimations = function(){
  var svg1 = document.getElementById("s01");
  var svg2 = document.getElementById("s02");
  var svg3 = document.getElementById("s03");
  var svg4 = document.getElementById("s04");

  var rightSide = new TimelineLite();
  var leftSide = new TimelineLite();

  CSSPlugin.defaultTransformPerspective = 300;
  TweenLite.set(".poly", {transformStyle:"preserve-3d"});

  rightSide.add(
    TweenLite.from(svg1, 0.5, {opacity:0, 
      rotationY:-180, 
      transformOrigin:"150% 50% 100px", delay: 1
    })
  );

  rightSide.add(
    TweenLite.from(svg2, 1, {
      rotationY:-180,  
      transformOrigin:"100% 50% 100px", 
      autoAlpha:0, 
      opacity:0
    })
  );

  leftSide.add(
    TweenLite.from(svg4, 0.5, {opacity:0, 
      rotationY:180, 
      transformOrigin:"0% 50% -100px", delay: 1
    })
  );
  leftSide.add(TweenLite.from(svg3, 1.25, {opacity:0, 
      rotationY:180, 
      transformOrigin:"0% 50% -100px"
    })
  );

  rightSide.play();
  leftSide.play();
}; //headerAnimations()

window.on('load', headerAnimations());