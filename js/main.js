const btnEncrypt = document.querySelector ('.encrypt')
const btnDecrypt = document.querySelector ('.decrypt')
const btnCopy = document.querySelector ('.copy')
const textArea = document.querySelector ('textarea')
const messageAlert = document.querySelector ('.messageAlert')
const finalOutput = document.querySelector ('#finalTextOutput')

//  Button click functions

function clickEncrypt (event) {

    event.preventDefault();
    btnEncrypt.classList.add ('blue')
    btnDecrypt.classList.remove ('blue')
    btnCopy.classList.remove ('blue')
  
}
  
function clickDecrypt (event) {
  
    event.preventDefault();
    btnEncrypt.classList.remove ('blue')
    btnDecrypt.classList.add ('blue')
    btnCopy.classList.remove ('blue')
  
}
  
function clickCopy (event) {
  
    event.preventDefault();
    btnEncrypt.classList.remove ('blue')
    btnDecrypt.classList.remove ('blue')
    btnCopy.classList.add ('blue')
  
}

// alert for empty message input field

function alertMessage () {

  if ( textArea.value == '' ) {

  btnCopy.style.display = 'none'
  finalOutput.style.display = 'none'
  messageAlert.style.display = 'block'

  } else {

  btnCopy.style.display = 'block'
  finalOutput.style.display = 'block'
  messageAlert.style.display = 'none'

  }

}

// encrypt message

function encryptMessage () {

  let result =  textArea.value

  .replaceAll ('e', 'enter')
  .replaceAll ('E', 'enter')
  .replaceAll ('i', 'imes')
  .replaceAll ('I', 'imes')
  .replaceAll ('a', 'ai')
  .replaceAll ('A', 'ai')
  .replaceAll ('o', 'ober')
  .replaceAll ('O', 'ober')
  .replaceAll ('u', 'ufat')
  .replaceAll ('U', 'ufat')
  
  finalOutput.value = result
}

// decrypt Message

function decryptMessage () {

  let result =  textArea.value

  .replaceAll ('enter', 'e')
  .replaceAll ('imes', 'i')
  .replaceAll ('ai', 'a')
  .replaceAll ('ober', 'o')
  .replaceAll ('ufat', 'u');

  finalOutput.value = result

}

// button copy Message

function copyMessage () {

  var copiedText = finalOutput.value

  navigator.clipboard.writeText(copiedText)

}

// block accentuation

function blockChar () {

  let result =  textArea.value

  .normalize('NFD').replaceAll(/[\u0300-\u036f]/g, "")
  
  textArea.value = result

}

// button events


  btnEncrypt.addEventListener('click', (event) => {
  
    clickEncrypt(event)
    encryptMessage ()
    alertMessage()
    
  })
  
  btnDecrypt.addEventListener('click', (event) => {
    
    clickDecrypt(event)
    decryptMessage()
    alertMessage()
    
    
  
  })
  
  btnCopy.addEventListener('click', (event) => {
    
    clickCopy(event)
    copyMessage ()
   
  });

  // accentuation

  textArea.addEventListener('keypress', () =>{

    blockChar()

  } )
  
  
  






