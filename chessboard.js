chessboard_size = 80
base_str = ''
for (i=1; i<chessboard_size+1; i++) {
  if (i % 2 == 0) {
    base_str += '#';
  }
  else {
    base_str += ' '
  }
}
for (i=1; i<=chessboard_size; i++) {
  if (i % 2 ==0) {
    console.log(base_str.slice(1, base_str.length));
  }
  else {
    console.log(base_str.slice(0, base_str.length-1));
  }
}
