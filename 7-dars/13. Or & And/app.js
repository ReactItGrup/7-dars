const parol = "Password1234";

if (parol.length >= 12 && parol.includes("@")) {
  console.log("Sizning parolingiz juda uzun yoki belgilarni olib tashlang");
} else if (parol.length > 8 || parol.includes("@")) {
  console.log("Sizning parolingiz yetarlicha kuchli");
} else {
  console.log("Sizning parolingiz kuchsiz");
}

// & => va degan ma'noda yoziladi

// true && true && true && false => false

// || => yoki degan ma'noda yoziladi

// false || false || false || true => true

if (parol.length >= 12 && parol.includes("@")) {
  console.log("Sizning parolingiz juda uzun yoki belgilarni olib tashlang");
} else if (parol.length > 8 || (parol.includes("@") && parol.length >= 5)) {
  console.log("Sizning parolingiz yetarlicha kuchli");
} else {
  console.log("Sizning parolingiz kuchsiz");
}
