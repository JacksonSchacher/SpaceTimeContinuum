export class Photo {
  constructor(data) {
    this.date = data.date
    this.description = data.explanation
    this.img = data.hdurl
    this.title = data.title
  }
}
