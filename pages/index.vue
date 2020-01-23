<template>
  <div class="container">
    <h2>My latest thoughts</h2>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <img :src="post.feature_image" alt="" />
        <div class="content">
          <span>Author: Marcin K.</span>
          <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
          <p>{{ post.excerpt }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts } from '../api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    // console.log(posts)

    return { posts }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
