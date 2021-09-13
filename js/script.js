
{
  let mouse = { x: 0, y: 0 }; //Cursor position
  let pos = { x: 0, y: 0 }; //Cursor position
  let pos2 = { x: 0, y: 0 }; //Cursor position
  let ratio = 0.05; //delay follow cursor
  let ratio1 = 0.08; //delay follow cursor
  let active = false;


  let cursor = document.getElementById("cursor");
 let cursor2 = document.getElementById('cursor2');
  let text = document.querySelectorAll("a");
  
// cursor animation start from here

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  gsap.set(cursor2, { xPercent: -50, yPercent: -50 });


   //for mouse  one
  gsap.ticker.add(updatePosition);
  function updatePosition() {
    if (!active) {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      pos2.x += (mouse.x - pos2.x) * ratio1;
      pos2.y += (mouse.y - pos2.y) * ratio1;
      gsap.set(cursor, { x: pos.x, y: pos.y });
      gsap.set(cursor2, { x: pos2.x, y: pos2.y });
    }
  }



}

