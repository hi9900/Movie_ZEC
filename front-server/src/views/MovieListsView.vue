<template>
  <!-- <v-skeleton-loader v-if="!randomMovies" type="carousel"></v-skeleton-loader> -->
  <v-container class="fill-height" v-if="directorMovies">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card-text class="text-center">
          <h1>오늘의 랜덤 영화</h1>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <!-- 랜덤 감독 추천 -->
      <v-col cols="12" sm="6" md="4">
        <v-card
          height="250px"
          outlined
          @click="goToDirector(directorMovies?.director.id)"
          class="mx-auto pb-3"
        >
          <!-- 카드를 누르면 그 감독의 영화 조회 페이지로 이동 -->
          <v-card-title class="card-title-margin"
            >{{ directorMovies?.director?.name }}감독의 인기 영화</v-card-title
          >
          <v-card-text>
            <div class="poster-container">
              <v-img
                :aspect-ratio="2 / 3"
                v-for="(movie, index) in directorMovies?.data.slice(0, 5)"
                :key="movie?.id"
                :src="
                  'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
                  movie.poster_path
                "
                :alt="movie?.title"
                class="poster"
                :style="{
                  zIndex: directorMovies?.data.length - index,
                  marginLeft: -index * 20 + 'px'
                }"
              ></v-img>
            </div>
            <v-col
              v-if="directorMovies?.data.length > 5"
              cols="4"
              class="more-movies"
            ></v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- </v-row> -->
      <!-- 랜덤 장르 추천 -->
      <!-- 카드를 누르면 그 장르의 영화 조회 페이지로 이동 -->
      <v-col cols="12" sm="6" md="4">
        <v-card height="250px" outlined>
          <!-- @click="goToGenre(genreMovies?.genre.id)" -->
          <v-card-title class="card-title-margin"
            >{{ genreMovies?.genre?.name }}장르의 인기 영화</v-card-title
          >
          <v-card-text>
            <div class="poster-container">
              <v-img
                aspect-ratio="2/3"
                max-width="100%"
                v-for="(movie, index) in genreMovies?.data?.slice(0, 5)"
                :key="movie.id"
                :src="
                  'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
                  movie.poster_path
                "
                :alt="movie.title"
                class="poster"
                :style="{
                  zIndex: genreMovies?.data.length - index,
                  marginLeft: -index * 20 + 'px'
                }"
              ></v-img>
            </div>
            <v-col
              v-if="genreMovies?.data.length > 5"
              cols="4"
              class="more-movies"
            >
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 랜덤 배우 -->
      <v-col cols="12" sm="6" md="4">
        <v-card height="250px" outlined>
          <!-- @click="goToDirector(directorMovies.director_data.id)"> -->
          <!-- 카드를 누르면 그 감독의 영화 조회 페이지로 이동 -->
          <v-card-title class="card-title-margin"
            >{{ actorMovies?.actor?.name }}의 인기 출연 영화</v-card-title
          >
          <v-card-text>
            <div class="poster-container">
              <v-img
                aspect-ratio="2/3"
                max-width="100%"
                v-for="(movie, index) in actorMovies?.data.slice(0, 5)"
                :key="movie.id"
                :src="
                  'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
                  movie.poster_path
                "
                :alt="movie.title"
                class="poster"
                :style="{
                  zIndex: actorMovies?.data.length - index,
                  marginLeft: -index * 20 + 'px'
                }"
              ></v-img>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MovieLists',
  data() {
    return {}
  },
  components: {},
  computed: {
    directorMovies() {
      return this.$store.state.list.directorMovies
    },
    genreMovies() {
      return this.$store.state.list.genreMovies
    },
    actorMovies() {
      return this.$store.state.list.actorMovies
    },
    randomMovies() {
      return this.$store.state.list.randomMovies
    }
    // movielists() {
    //   return this.$store.state.list.movielists
    // }
  },
  methods: {
    getMovie() {
      this.$store.dispatch('list/getMovie')
    },
    goToDirector(directorId) {
      this.$router.push({name: 'ListsDerector', params: {id: directorId}})
    },
    goToGenre(genreId) {
      this.$router.push({name: 'ListsGenre', params: {id: genreId}})
    }
  },
  created() {
    this.getMovie()
    // this.getLists()
  }
}
</script>

<style scoped>
.poster-container {
  display: flex;
  align-items: flex-start;
}
.poster {
  width: 100px;
  height: 150px;
  object-fit: cover;
}
.card-title-margin {
  margin-bottom: 1rem;
}

.card-text-padding {
  padding-top: 3rem;
}
</style>
