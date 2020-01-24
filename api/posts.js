/* eslint-disable no-return-await */
import GhostContentApi from '@tryghost/content-api'
import API from './localAppSetting'

const api = new GhostContentApi(API)

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags, authors'
    })
    .catch((err) => {
      throw new Error('Api issue' + err)
    })
}
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      throw new Error('Api issue' + err)
    })
}
