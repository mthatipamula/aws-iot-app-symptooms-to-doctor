  var socket = io('http://localhost:3000');

  socket.on('connect', function () {
      console.log('Connected to IoT Server')
  });

  socket.on('event', function (data) {

      const today = new Date().toLocaleDateString('de');
      const now = new Date().toLocaleTimeString('de', {
          hour12: false,
          hour: "numeric",
          minute: "numeric"
      });

      const response = JSON.parse(data);
      console.log(response);

      let symptom = "Headache";
      let device = "blur_circular";
      let device_name = "Amazon Alexa";
      let severity = "local_florist";

      if (response.clickType == "DOUBLE") {
          severity = "flash_on";
      }

      let iot_alexa = "G030MD029031W4WR";
      let iot_medication = "G030MD0240111G5F";
      let iot_iOS = "G030MD02519504P9";


      if (response.serialNumber == "G030MD02519504P9") {
          device = "smartphone";
          device_name = "iOS Companion App";
          symptom = "Headache";
          severity = "flash_on";

          $('#incidents').prepend(`<tr>
                                <td><i class="material-icons circle">${device}</i></td>
                                <td><i class="material-icons circle">${severity}</i></td>
                                <td>${symptom}</td>
                                <td>${device_name}</td>
                                <td>${today}</td>
                                <td>${now}</td>
                            </tr>`);
      }

      if (response.serialNumber == "G030MD029031W4WR") {
          device = "blur_circular";
          device_name = "Amazon Alexa";
          symptom = "Headache";
          severity = "flash_on";

          $('#incidents').prepend(`<tr>
                                <td><i class="material-icons circle">${device}</i></td>
                                <td><i class="material-icons circle">${severity}</i></td>
                                <td>${symptom}</td>
                                <td>${device_name}</td>
                                <td>${today}</td>
                                <td>${now}</td>
                            </tr>`);
      }

      if (response.serialNumber == "G030MD0240111G5F") {
          device = "play_circle_outline";
          device_name = "Amazon Dash Button";
          let medication = "Platinum";

            $('#medication').prepend(`<tr>
                                <td><i class="material-icons circle">${device}</i></td>
                                <td><i class="material-icons circle">face</i></td>
                                <td>${medication}</td>
                                <td>${device_name}</td>
                                <td>${today}</td>
                                <td>${now}</td>
                            </tr>`);

      }


  });

  socket.on('disconnect', function () {
      console.log('Connection lost');
  });