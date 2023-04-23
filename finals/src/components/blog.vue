<template>
  <div class = "Blog">
    <h1>Blog</h1>
    <img src="https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1600157807430-N5ZTR05SKTEZ7M2N1DIH/Kobe+bryant+greatest+of+all+time.jpg?format=500w">
    <p>Kobe Bryant: The Black Mamba</p>

<div class="row">
  <div class="column">Kobe Bryant: Gone too soon and without a doubt, one of the greatest players in NBA history
In almost every aspect of life, and certainly, in the sports world, the number 24 is greater than the number 23.  
<img src="https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1b74be94-6b3a-4e80-b9d7-de054b6fd236/Kobe+Bryant+24+La+Lakers+Greatest+NBA.jpg?format=750w"></div>
  <div class="column">
    <h1>Arise Mamba Arise!</h1>
    <p>Unfortunately, Kobe’s disposition and persona the “Mamba Mentality”, often celebrated, may have been the reason why he fell a little short when compared to Jordan. Bryant even wrote a book with the same title to enhance the on-court personality known as “Mamba”.  

Kobe was a competitor above anything else.  He wanted to win more than anyone.  Bryant was willing to sacrifice anything and anyone that interfered with his quest for rings.  Cursing at teammates, throwing elbows and fighting in practices, are reasons that Kobe was difficult to play with. 

Bryant had a reputation for being hard on fellow teammates and challenging the mental fortitude of the coaching staff.  Though it was all in the name of competitive spirit, his unwillingness to endear himself to his teammates, ultimately made acquiring key players through free agency very difficult.  

Unapologetic and brash.  Many other negative words have been associated with Kobe and his relationship with his fellow players.  Kobe had a simple explanation for his behaviour towards his Lakers’ teammates, and that was if they could not handle physicality, verbal jabs, and the occasional fight in practice, how would they handle it coming from opponents in the playoffs? </p>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{text-align: center;}
.Blog img {
	display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
.Blog p{
    text-align: center;
    font-size: larger;
    font-weight: bold;
}
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column{color: black;
font-weight: bold;}

.column img{
    display: block;
  margin-left: auto;
  margin-right: auto;

  width: 60%;
}
</style>
