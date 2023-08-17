// break and conteniue

const natijalar = [30, 43, 20, 0, 13, 100, 32, 70];

for (let i = 0; i < natijalar.length; i++) {
  if (natijalar[i] === 0) {
    continue;
  }
  console.log("Sizning Natijangiz", natijalar[i]);

  if (natijalar[i] === 100) {
    console.log("Siz eng yuqori balni yig'dingiz");
    break;
  }
}

// break bizga for ni bizga kerakli joyga yetganda tohtatish uchun ishlatiladi
