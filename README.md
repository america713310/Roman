var senderEmail = new MailAddress(_configuration.GetSection("Smtp")["Email"], "Sapsan");
            var EmailReceiver = new MailAddress(user.Email, "Пользователь");
            string _password = _configuration.GetSection("Smtp")["Password"];
            string _sub = "Сброс пароля";
            string _body = string.Format("<h1>Доброго времени суток!</h1><br><hr>" +
                "<p>Так как вы забыли пароль, ваш пароль был сброшен и был сгенерирован новый: <h1>{0}</h1></p>" +
                "<p>С уважением, Система учета управления Сапсан!</p>", _newPass);

            _context.Users.FirstOrDefault(x => x.Email == user.Email).Password = BCrypt.Net.BCrypt.HashPassword(_newPass);

            await _context.SaveChangesAsync();

            var smtp = new SmtpClient
            {
                Host = _configuration.GetSection("Smtp")["Host"],
                Port = int.Parse(_configuration.GetSection("Smtp")["Port"]),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(senderEmail.Address, _password)
            };

            using (var message = new MailMessage(senderEmail, EmailReceiver))
            {
                message.Subject = _sub;
                message.Body = _body;
                message.IsBodyHtml = true;
                ServicePointManager.ServerCertificateValidationCallback += (s, cert, chain, sslPolicyErrors) => true;
                smtp.Send(message);
            }
            smtp.Dispose();
