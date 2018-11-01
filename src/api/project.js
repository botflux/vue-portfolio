import axios from 'axios'

const baseConfig = {
  baseURL: 'http://localhost/wordpress/wp-json/wp/v2/',
  method: 'get'
}

axios.request({...baseConfig, ...{
  url: 'posts/5'
}}).then(response => {
  console.log(response.data)
}).catch(error => {

}).then (_ => {

})

const getAllProjects = () => {
  return [{
    id: 0,
    img: 'https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg',
    alt: 'Une photo de la platerforme de macro-photographie',
    title: 'Plateforme macro-photographie 0',
    description: 'Une plateforme contrôlée par micro ordinateur servant à prendre des matrices de photographie de minéraux.',
    body: `<p>Blaaaa bla bla <strong>aaaaa</strong></p><img src="https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg">`
  }, {
    id: 1,
    img: 'https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg',
    alt: 'Une photo de la platerforme de macro-photographie',
    title: 'Plateforme macro-photographie 1',
    description: 'Une plateforme contrôlée par micro ordinateur servant à prendre des matrices de photographie de minéraux.'
  }, {
    id: 2,
    img: 'https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg',
    alt: 'Une photo de la platerforme de macro-photographie',
    title: 'Plateforme macro-photographie 2',
    description: 'Une plateforme contrôlée par micro ordinateur servant à prendre des matrices de photographie de minéraux.'
  }]
}

const getProject = (id) => {
  return getAllProjects().find(project => project.id == id)
}

export { getAllProjects, getProject }
