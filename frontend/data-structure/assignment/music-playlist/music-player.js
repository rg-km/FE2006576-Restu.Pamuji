const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        //adding multiple song to playlist Array
        this.playlist.songs.push(song)
    }

    play() {
        // TODO: answer here

        //playing song when playlist array is empty, return empty string
        if (this.playlist.songs.length == 0) {
            return ""
        }

         //playing first song
         if (this.playlist.songs.length == 1 && this.playlist.isRepeatable == false) {
            let output = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title
            this.playlist.songs.shift()
            return output
        }

        // play song with one song in repeatable condition
        if (this.playlist.songs.length == 1 && this.playlist.isRepeatable == true) {
            let output = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title
            return output
        }

        //play song with multiple song in non-repeatable condition
        if (this.playlist.songs.length > 1 && this.playlist.isRepeatable == false) {
            let output = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title
            this.playlist.songs.shift()
            return output
        }

       // play the first song and played song become the last song in the playlist in repeatable condition
         if (this.playlist.songs.length > 1 && this.playlist.isRepeatable == true) {
            let output = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title
            this.playlist.songs.push(this.playlist.songs.shift())
            return output
        }

    }
}