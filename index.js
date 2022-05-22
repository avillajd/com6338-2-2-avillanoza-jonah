// Your code here
function greet () {
   var name= prompt ('What is your name?')
   if (name) {
    alert ('Hello, ' + name) 
   } else {
       return
   }

   var oldAge= prompt ('How old are you ?')
   var ageOfPers = parseInt (oldAge)
   if (!ageOfPers) return

 var BirthThisYear= confirm ('Have you had a Birthday this year?')

 if (BirthThisYear) {
     alert (name + ', you must have been born in ' + (new Date().getFullYear() - ageOfPers))
     console.log('subtract their age from the current year')
 } else {
    alert (name + ', you must have been born in ' + (new Date().getFullYear() - ageOfPers - 1 ))
     console.log('subtract their age plus one from the current year.')

 }


}