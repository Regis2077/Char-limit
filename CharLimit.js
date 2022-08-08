
const initFieldCharacterLimit = () => {
  const fieldCharacterLimitSelector = [
    '#client-first-name',
    '#client-last-name',
  ]
  const characterLimit = {
    '#client-first-name': 35,
    '#client-last-name': 35,
     default: 35
  }

  const handleFieldCharacterLimit = selector => {
    const fieldEl = document.querySelector(selector)
 if (fieldEl === null) {
      setTimeout(() => handleFieldCharacterLimit(selector), 3000)
    }

    if (fieldEl) {
      const { id } = fieldEl
      fieldEl.maxLength = characterLimit[id]  || characterLimit.default
    }
  }
  fieldCharacterLimitSelector.forEach(handleFieldCharacterLimit)
}

window.addEventListener('load', () => {
  initFieldCharacterLimit()
})
