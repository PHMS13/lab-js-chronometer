class Chronometer {
  constructor() {
    
    this.currentTime = 0 //meus segundos
    this.intervalId = null

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(()=>{
    this.currentTime++  
     if(printTimeCallback){
      printTimeCallback()
     }
    
    }, 10)
  }

  getMinutes() {

    return Math.floor(this.currentTime / 6000)

  }

  getSeconds() {
  
    return Math.floor((this.currentTime / 100 )% 60)

  }

  getCentiseconds() {

    return Math.floor(this.currentTime % 100)

  }

  computeTwoDigitNumber(value) {
    // value pode ser usado tanto para minutos quanto para segundos
    if(value < 10 ){

      return`0${value}`

    } else {

    return `${value}`
    }
    
  }
  
  stop() {
    
    clearInterval(this.intervalId)

  }

  reset() {

     this.currentTime = 0

  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())

     return(`${minutes}:${seconds}.${centiseconds}`)
  }
}
