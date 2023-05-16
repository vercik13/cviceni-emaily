const showUnread = (unreadEmails) => {
  const unreadElm = document.querySelector('#unread');
    unreadElm.innerHTML = unreadEmails.map((unreadEmail) => `
      <div class="email">
      <div class="email__head">
        <button class="email__icon email__icon--closed"></button>
        <div class="email__info">
          <div class="email__sender">${unreadEmail.sender.name}</div>
          <div class="email__subject">${unreadEmail.subject}</div>
        </div>
        <div class="email__time">${unreadEmail.time}</div>
      </div>
      <div class="email__body"></div>
      </div>
      `
    ).join('');
}
  
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
.then((response) => response.json())
.then ((data) => {
  showUnread(data.emails)
})


const showRead = (readEmails) => {
  const readElm = document.querySelector('#read');
    readElm.innerHTML = readEmails.map((readEmail) => `
    <div class="email">
      <div class="email__head">
        <button class="email__icon email__icon--opened"></button>
        <div class="email__info">
          <div class="email__sender">${readEmail.sender.name}</div>
          <div class="email__subject">${readEmail.subject}</div>
        </div>
        <div class="email__time">${readEmail.time}</div>
      </div>
      <div class="email__body"></div>
    </div>
    `).join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
.then((response) => response.json())
.then((data) => {
  showRead(data.emails)
})