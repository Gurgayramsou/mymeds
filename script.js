const lgBtn = document.querySelector('#logBtn');
const formReg = document.querySelector('.regForm');

// login form appears
lgBtn.addEventListener('click', function () {
  const formLog = document.querySelector('.lgForm');
  formReg.style.display = 'none';
  formLog.style.display = 'flex';
  formLog.style.top = '32%';
});

// registration form appears
const regFrm = document.querySelector('#regNav');
regFrm.addEventListener('click', function () {
  formReg.style.display = 'flex';
  formReg.style.top = '32%';
});
