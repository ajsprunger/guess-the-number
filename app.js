const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  userGuess: null,
  previousGuesses: [],
  promptText: null,
  getGuess: function(){
    this.promptText = `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    this.userGuess = Number(window.prompt(this.promptText)) 
    while (isNaN(this.userGuess) || this.userGuess <= this.smallestNum || this.userGuess >= this.biggestNum){
      this.promptText = `Please enter a valid number`
      this.userGuess = Number(window.prompt(this.promptText))
    } 
  },
  render: function() {
    if (this.userGuess === this.secretNum) {
      alert(`Congrats! You guessed the number in ${this.previousGuesses.length}`)
    } else if(this.userGuess > this.secretNum) {
      alert(`Your guess is too high. Previous guesses: ${this.previousGuesses.join(', ')}`)
    } else {
      alert(`Your guess is too low. Previous guesses: ${this.previousGuesses.join(', ')}`)
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      while (this.userGuess !== this.secretNum){
      this.getGuess()
      if (this.userGuess < this.secretNum){
        this.smallestNum = this.userGuess
      } else {
        this.biggestNum = this.userGuess
      }
      this.previousGuesses.push(this.userGuess)
      this.render()
    }
    return
  }
}

game.play()
