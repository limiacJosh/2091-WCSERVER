<template>
    <div class = "about">
      <main>
      <section>
			<h2>About the NBA</h2>
			<p>The National Basketball Association (NBA) is a men's professional basketball league in North America, composed of 30 teams (29 in the United States and 1 in Canada). The league was founded in 1946 and has become one of the major professional sports leagues in the world.</p>
			<p>The NBA season typically runs from October to June, with the playoffs taking place in the spring. The league's most prestigious award is the NBA Championship, which is awarded to the winner of the NBA Finals.</p>
		</section>
		<h1>These are all the NBA Teams</h1>
    <img src="https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image8.png">
	</main>
		<footer>copyright &copy; NBA</footer>


    </div>
  </template>
  
  <script>
  export default {
    name: 'about',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

header, footer {
	color: black;
	padding: 20px;
  text-align: center;
}


main {
	padding: 20px;
}
section {
	margin-bottom: 20px;
}

h2 {
	color: #1d428a;
}

h1{text-align: center;}
p{font-size: medium;
font-weight: bold;}
  </style>
  