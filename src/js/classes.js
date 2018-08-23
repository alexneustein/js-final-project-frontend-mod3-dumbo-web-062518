class User {
  constructor() {

  }
}

class Channel {
  constructor() {

  }
}

class Message {
  constructor() {

  }
}

class Lol {
  constructor(message) {
    this.message = message
  }

  // Reverses text message
  reverse() {
    const newMsg = this.message.split("")
    return newMsg.reverse().join("")
  }

  upsidedown() {
    const dictionary = {
      "a": "ɐ", "b": "q", "c": "ɔ", "d": "p", "e": "ǝ", "f": "ɟ", "g": "ƃ",
      "h": "ɥ", "i": "ı", "j": "ɾ", "k": "ʞ", "l": "ן", "m": "ɯ", "n": "u",
      "o": "o", "p": "d", "q": "b", "r": "ɹ", "s": "s", "t": "ʇ", "u": "n",
      "v": "ʌ", "w": "ʍ", "x": "x", "y": "ʎ", "z": "z",
      "A": "∀", "B": "𐐒", "C": "Ɔ", "D": "◖", "E": "Ǝ", "F": "Ⅎ", "G": "⅁",
      "H": "H", "I": "I", "J": "ſ", "K": "⋊", "L": "˥", "M": "W", "N": "N",
      "O": "O", "P": "Ԁ", "Q": "Ό", "R": "ᴚ", "S": "S", "T": "⊥", "U": "∩",
      "V": "Λ", "W": "M", "X": "X", "Y": "⅄", "Z": "Z",
      "&": "⅋", ".": "˙", ",": "'", "[": "]", "]": "[", "(": ")", ")": "(",
      "{": "}", "}": "{", "?": "¿", "!": "¡", "'": ",", '"': "„", ";": "؛",
      "`": ",", "‿": "⁀", "⁅": "⁆", "∴": "∵", "0": "0", "1": "Ɩ", "2": "ᄅ",
      "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "ϛ", "7": "ㄥ", "8": "8", "9": "6"
    }

    const newMsg = []
    const splitMsg = this.message.split("")
    splitMsg.forEach(letter => {
      dictionary[letter] ? newMsg.push(dictionary[letter]) : newMsg.push(letter)
    })
    return newMsg.join("")
  }

  
}

// class WebSocket {
//   constructor(url, protocols) {
//     this.url = url
//     this.protocols = protocols
//   }
//
//   const chatSocket = new WebSocket(this.url)
// }
