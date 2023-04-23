<template>
  <div class="home-page">
  <h1>Latest News</h1>
  <div class="home-posts">
    <div class="home-post" v-for="post in posts" :key="post.id">
      <img :src="post.image" alt="home Post Image">
      <div class="home-post-content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <a :href="'/home/' + post.id">Read More</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      posts: [
      {
        id: 1,
        title: 'NBA Announces New Season Schedule',
        content: 'The NBA has announced the schedule for the upcoming season. The first game will be played on October 19, 2023, with the Los Angeles Lakers taking on the Brooklyn Nets.',
        image: 'https://cdn.nba.com/manage/2022/08/2022-23-NBA-REGULAR-SEASON-SCHEDULE-1568x882.png',
      },
      {
        id: 2,
        title: 'LeBron James Signs Extension with Lakers',
        content: 'LeBron James has signed a two-year extension with the Los Angeles Lakers. The deal is worth $85 million and will keep James with the Lakers through the 2024-2025 season.',
        image: 'https://cdn.nba.com/teams/uploads/sites/1610612747/2022/08/2223_lal_mktg_bronextension_1600x900-1.jpg',
      },
      {
        id: 3,
        title: 'Giannis Antetokounmpo Wins NBA MVP',
        content: 'Giannis Antetokounmpo has won his third NBA MVP award. He led the Milwaukee Bucks to the NBA Championship last season and averaged 28.1 points, 11 rebounds, and 5.9 assists per game.',
        image: 'https://www.gannett-cdn.com/presto/2021/03/08/USAT/661a7c79-50f4-4cbc-a87c-1c9f678e1d4d-USATSI_15690832.jpg?crop=1514,1022,x0,y57',
      },
    ],
  };
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
max-width: 800px;
margin: 0 auto;
padding: 20px;
}

.home-page h1 {
font-size: 36px;
margin-bottom: 20px;
}

.home-posts {
display: flex;
flex-wrap: wrap;
gap: 20px;
}

.home-post {
width: 100%;
max-width: 400px;
background-color: #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
overflow: hidden;
}

.home-post img {
width: 100%;
height: 200px;
object-fit: cover;
}

.home-post-content {
padding: 20px;
}

.home-post-content h2 {
font-size: 24px;
margin-bottom: 10px;
}

.home-post-content p {
font-size: 16px;
line-height: 1.5;
margin-bottom: 20px;
}

.home-post-content a {
display: inline-block;
padding: 10px 20px;
font-size: 18px;
font-weight: bold;
color: #fff;
background-color: #FDB927;
border: none;
border-radius: 5px;
transition: background-color 0.3s ease;
}
</style>
