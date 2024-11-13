class MusicPlayer {             // let MP = class {}
    constructor(format) {
        this.format = format;
    }

    getFormat() {
        return this.format;
    }

    setFormat(new_format) {
        return this.format = new_format;
    }

    play() {
        console.log("Lecture en cours...");
    }
}

let player = new MusicPlayer("MP3");
console.log(player.getFormat());
console.log(player.setFormat("OGG"));