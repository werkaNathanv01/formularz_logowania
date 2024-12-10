const url = "https://xeno-canto.org/api/2/recordings?query=cnt:brazil"; 

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const select = document.querySelector("#bird-select");
        data.recordings.forEach(recording => {
          const option = document.createElement("option");
          option.value = recording.file; 
          option.textContent = `${recording.gen} ${recording.sp} (${recording.en})`; 
          select.appendChild(option);
        });
      });

    document.querySelector("#bird-select").addEventListener("change", function () {
      const audioUrl = this.value;
      const playerDiv = document.querySelector("#player");

      if (!audioUrl) {
        playerDiv.innerHTML = "";
        return;
      }

      playerDiv.innerHTML = `
        <p>Odtwarzanie nagrania:</p>
        <audio controls>
          <source src="${audioUrl}" type="audio/mpeg">
          Twoja przeglądarka nie obsługuje elementu audio.
        </audio>
      `;
    });