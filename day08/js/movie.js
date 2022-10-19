export class Movie {
    constructor(title, rating, actors, year) {
        this.title = title;
        this.rating = rating;
        this.actors = actors;
        this.year = year;
    }
    toString() {
        return `this movie is called ${this.title}. it is rated ${this.rating}. it stars ${this.actors.slice(0,-1).map(actor => actor.name).join(', ') + ' and ' + this.actors.slice(-1).map(actor => actor.name).join(', ')}. and it came out in ${this.year}`
    }
    addActor(actor) {
        console.log('actor', actor);
        this.actors.push({name: actor})
        console.log('actors', this.actors);
    }
}
