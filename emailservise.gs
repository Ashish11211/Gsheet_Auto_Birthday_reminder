function sendBirthdayReminder(birthdayList) {
  const recipients = "mis@.com,HR@.COM";

  let body = "Hello Team,<br><br>Today's Birthdays:<br><ul>";

  birthdayList.forEach(person => {
    body += `<li><b>${person.name}</b> | ${person.division} | ${person.department} (${person.email})</li>`;
  });

  body += "</ul><br>🎉 Wish them a great year ahead!<br><br>Regards,<br><b>company</b>";

  MailApp.sendEmail({
    to: recipients,
    subject: "🎂 Birthday Reminder",
    htmlBody: body
  });
}
