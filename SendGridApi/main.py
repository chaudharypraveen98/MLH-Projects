import sendgrid
import os
from sendgrid.helpers.mail import Mail, Email, To, Content

sg = sendgrid.SendGridAPIClient(api_key='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')
from_email = Email("chaudharypraveen98@gmail.com")  # Change to your verified sender
to_email = To("devilunknown1509@gmail.com")  # Change to your recipient
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python")
mail = Mail(from_email, to_email, subject, content)

# Get a JSON-ready representation of the Mail object
mail_json = mail.get()

# Send an HTTP POST request to /mail/send
response = sg.client.mail.send.post(request_body=mail_json)
print("successful")