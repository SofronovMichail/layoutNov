function showBlock(val) {
  document.getElementById("id1").style.display = "none";
  document.getElementById("id2").style.display = "none";
  document.getElementById("id3").style.display = "none";
  document.getElementById("id4").style.display = "none";
  document.getElementById("id5").style.display = "none";
  document.getElementById("id" + val).style.display = "block";
}
