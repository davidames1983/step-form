const capitalize = (str) => {    
    const firstLetter = str.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = str.slice(1)
    
    return firstLetterCap + remainingLetters
}

export default capitalize