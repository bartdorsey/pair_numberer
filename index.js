const input = document.getElementById('input');
const output = document.getElementById('output');

const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', async e => {
  output.select();
  document.execCommand('copy');
});

input.addEventListener('input', e => {
  const studentsString = input.value
  const groups = studentsString.split('\n\n');
  let roomNum = 1;
  let string = '';
  for (const group of groups) {
    string += `\n🚪 Room ${roomNum}\n`;
    const students = group.split('\n');
    for (const student of students) {
      string += `👤 ${student}\n`;
    }
    string += '\n';
    roomNum++;
    
  }
  output.value = string;
});
