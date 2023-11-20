let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #895F51;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #895F51;">Soy estudiante de Ciencias Computacionales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
