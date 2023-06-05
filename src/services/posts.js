import useApi from 'src/composables/UseApi'

export default function postService () {
  const { list, getById, post, update, remove } = useApi('posts')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
