<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Welcome to my blog</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          dolor?
        </p>
        <nuxt-link to="/contacts" class="hire">Hire me</nuxt-link>
      </div>
    </div>
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
  </div>
</template>

<script>
import { getPosts } from '../api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    return { posts }
  }
}
</script>

<style lang="scss">
.hero {
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding-top: 2em;
  h1 {
    margin-bottom: 1em;
  }

  .hire {
    background: darken($color: $primary-color, $amount: 10%);
    padding: 0.5em 3em;
    margin: 2em 0 3em;
    display: inline-block;
    border-radius: 10px;
    color: $accent-color;
    text-decoration: none;
  }
}
</style>
