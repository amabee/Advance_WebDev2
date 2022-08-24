
function check(form)/*function to check userid & password*/
{
if(form.username.value == "admin" && form.passw.value == "admin")
  {
   window.open('index.html')/*opens the target page while Id & password matches*/
  
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
