const API_KEY = '308380f1e2d8e65958399a33b80c395f'
const HASH = '1ddab9dc072b466efe73d58410e85be8'

const logic = {

    retrieveCharacters(){
        return fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=9&apikey=${API_KEY}&hash=${HASH}&limit=100`)
            .then(res => res.json())
    },

    retriveCharacterById(characterId){
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=9&apikey=${API_KEY}&hash=${HASH}`)
            .then(res => res.json())
    },

    retriveComics(){
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=9&apikey=${API_KEY}&hash=${HASH}`)
            .then(res => res.json())
    },

    retriveComicId(comicId){
        return fetch(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?ts=9&apikey=${API_KEY}&hash=${HASH}`)
            .then(res => res.json())
    },
}

module.exports = {logic}