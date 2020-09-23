from run import db
import os
import smtplib
from email.message import EmailMessage

EMAIL_ADDRESS = os.environ.get("EMAIL_ADDRESS")
EMAIL_USER = os.environ.get("EMAIL_USER")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")


class EmailMethods:
    def send_email(self):
        with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
            # Encrypt connection
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()

            # Login
            smtp.login(EMAIL_USER, EMAIL_PASSWORD)

            msg = EmailMessage()
            msg["Subject"] = self.data["subject"]
            msg["From"] = self.data["sender"]
            msg["To"] = EMAIL_ADDRESS
            msg.add_alternative(
                f"""\
                <!DOCTYPE html>
                <html>
                <style>
                    body h1 {{
                        font-weight: bold;
                    }}
                </style>

                <body>
                    <h1>From: {self.data["name"]} - {self.data["sender"]}</h1>
                    <p>{self.data["content"]}</p>
                </body>

                </html>
            """,
                subtype="html",
            )

            smtp.send_message(msg)

        return f"Success - email sent."
