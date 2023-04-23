<template>
    <div><h1>NBA All Star Players</h1>
   <div class="gallery">
		<div class="player">
			<img src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png">
			<h3>LeBron James</h3>
			<p>Team: Los Angeles Lakers</p>
		</div>
		<div class="player">
			<img src="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png">
			<h3>Kevin Durant</h3>
			<p>Team: Brooklyn Nets</p>
		</div>
		<div class="player">
			<img src="https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png">
			<h3>Stephen Curry</h3>
			<p>Team: Golden State Warriors</p>
		</div>
		<div class="player">
			<img src="https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png">
			<h3>Giannis Antetokounmpo</h3>
			<p>Team: Milwaukee Bucks</p>
		</div>
		<div class="player">
			<img src="https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png">
			<h3>Anthony Davis</h3>
			<p>Team: Los Angeles Lakers</p>
		</div>
		<div class="player">
			<img src="https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png">
			<h3>Luka Doncic</h3>
			<p>Team: Dallas Mavericks</p>
		</div>
	</div>
</div>
  </template>
  
  <script>
  export default {
    name: 'gallery',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.gallery {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    border: 3px solid #73AD21;
}

.player {
	margin: 20px;
	border: 1px solid #ddd;
	padding: 10px;
	text-align: center;
	width: 300px;
}

.player img {
	width: 100%;
	height: auto;
}

.player h3 {
	margin-top: 10px;
	font-size: 1.2rem;
}

.player p {
	margin-top: 5px;
	font-size: 1rem;
	color: black;
    font-weight: bold;
}


  </style>
  