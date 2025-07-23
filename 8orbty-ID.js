function generateCard() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const governorate = document.getElementById("governorate").value;
  const university = document.getElementById("university").value;
  const faculty = document.getElementById("faculty").value;
  const photo = document.getElementById("photo").files[0];

  const cardName = document.getElementById("cardName");
  const cardAge = document.getElementById("cardAge");
  const cardGovernorate = document.getElementById("cardGovernorate");
  const cardUniversity = document.getElementById("cardUniversity");
  const cardFaculty = document.getElementById("cardFaculty");
  const cardPhoto = document.getElementById("cardPhoto");
  const card = document.getElementById("card");

  if (!name || !age || !governorate || !university || !faculty || !photo) {
    alert("من فضلك املأ جميع البيانات");
    return;
  }

  cardName.textContent = `الاسم: ${name}`;
  cardAge.textContent = `السن: ${age}`;
  cardGovernorate.textContent = `المحافظة: ${governorate}`;
  cardUniversity.textContent = `الجامعة: ${university}`;
  cardFaculty.textContent = `الكلية: ${faculty}`;

  const reader = new FileReader();
  reader.onload = function () {
    cardPhoto.src = reader.result;
    card.style.display = "block";
  };
  reader.readAsDataURL(photo);

  const qrData = `الاسم: ${name}\nالسن: ${age}\nالمحافظة: ${governorate}\nالجامعة: ${university}\nالكلية: ${faculty}`;
  document.getElementById("qrcode").innerHTML = "";
  QRCode.toCanvas(document.createElement("canvas"), qrData, function (err, canvas) {
    if (!err) document.getElementById("qrcode").appendChild(canvas);
  });
}
