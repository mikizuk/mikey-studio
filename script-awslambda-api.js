const getAwsLambdaFunctions = () => {
  // console.log('aws lambda loading');
  const form = document.getElementById('form');
  const inputEmail = document.getElementById('inputEmail');
  const inputMessage = document.getElementById('inputMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Hurray! Mail was sent successfully! :)')
      const sendEmail = 'https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email' + `?param1=${inputEmail.value}` + `&param2=${inputMessage.value}`;
      const data = {
        'param1': inputEmail.value,
        'param2': inputMessage.value
      };
      console.log('data', data);

      // TODO try handling aws functions' fetch with arrow funtions... maybe it'll help? point no. 5 https://dmitripavlutin.com/javascript-arrow-functions-best-practices/
      fetch(sendEmail,
        {
          body: JSON.stringify(data),
          // type: "POST",
          method: "POST",
          dataType: 'json',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          },
        })
        .then(function (resp) {
          console.log('resp', resp);
          return resp.json();
        })
        .then(function (response) {
          console.log('response', response);
        })
        .catch(function (err) {
          console.log('error', err);
        });
    })

  }
}

export default { getAwsLambdaFunctions }