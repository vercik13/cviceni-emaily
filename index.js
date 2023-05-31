const showEmails = (emails, idElm) => {
  document.getElementById(idElm).innerHTML = emails
    .map((email) => {
      let iconState = 'closed';
      if ( idElm === 'read') {
        iconState = 'opened'
      }
      return `
      <div class="email">
      <div class="email__head">
        <button class="email__icon email__icon--${iconState}"></button>
        <div class="email__info">
          <div class="email__sender">${email.sender.name}</div>
          <div class="email__subject">${email.subject}</div>
        </div>
        <div class="email__time">${email.time}</div>
      </div>
      <div class="email__body"></div>
      </div>
      `
    })
    .join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
.then((response) => response.json())
.then ((data) => {
  showEmails(data.emails, 'unread')
})


fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
.then((response) => response.json())
.then((data) => {
  showEmails(data.emails, 'read')
})