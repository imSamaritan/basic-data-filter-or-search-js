const app = document.getElementById('app')
const searchInput = app.querySelector('.search')
const posts = app.querySelectorAll('ul.post-list .post-list-item')
const post_list = app.querySelector('ul.post-list')
const showResultEl = document.querySelector('.search-result')

searchInput.addEventListener('keyup', (e) => {
  const filterString = searchInput.value.toString().toLowerCase()
  
  posts.forEach((post) => {
    const postTitle = post.querySelector('.post-title').textContent.toLowerCase()

    if (postTitle.includes(filterString)) {
      post.classList.add('visible')
      post.style.display = 'block'
    }
    else {
      post.classList.remove('visible')
      post.style.display = 'none'
    }
      
  })

  const postFound = post_list.querySelectorAll('.visible').length
  let result = `Make your search...`

  if (filterString) result =  (postFound === 1 ? '1 post found...' : `${postFound} posts found...`)
  else result = `Make your search...`

  showResultEl.innerHTML = result

})