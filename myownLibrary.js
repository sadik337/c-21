function isTouching(Object1,Object2){
    if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
      && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
      && Object1.y - Object2.y < Object2.height/2 + Object1.height/2
      && Object2.y - Object2.y < Object2.height/2 + Object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }
  
  function bounceOff(Object3,Object4) {
    
   if( Object3.x - Object4.x < Object3.width/2 + Object3.width/2
      && Object4.x - Object3.x < Object4.width/2 + Object3.width/2)
      Object3.velocityX=object3.velocityX*(-1)
      Object4.velocityX=Object4.velocityX*(-1)
  }