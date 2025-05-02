// 더미 데이터 (실제 연동 시 API/Firebase 호출로 대체)
const userData = {
    balance: 1250000,
    rate: 2.5,
    tier: '골드 회원',
    transactions: [
      { type: '포인트 적립', reason: '수익률 포인트', amount: '+1,200P', date: '2023.07.15' },
      { type: '포인트 적립', reason: '이벤트 보너스', amount: '+500P', date: '2023.07.10' },
      // 추가 항목 ...
    ]
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // 1) 잔액, 등급, 변동률 업데이트
    const amountEl = document.querySelector('.balance-card__amount');
    const rateEl = document.querySelector('.balance-card__rate');
    const tierEl  = document.querySelector('.feature-card:nth-child(2) .feature-card__text p');
  
    amountEl.textContent = '₩' + userData.balance.toLocaleString();
    rateEl.textContent   = (userData.rate > 0 ? '+' : '') + userData.rate + '%';
    rateEl.classList.toggle('up', userData.rate >= 0);
    tierEl.textContent   = userData.tier;
  
    // 2) 거래 내역 렌더링
    const txList = document.querySelector('.transaction-list');
    txList.innerHTML = '';
    userData.transactions.forEach(tx => {
      const li = document.createElement('li');
      li.className = 'transaction-item';
      li.innerHTML = `
        <span class="transaction-item__type">${tx.type}</span>
        <span class="transaction-item__reason">${tx.reason}</span>
        <span class="transaction-item__amount">${tx.amount}</span>
        <span class="transaction-item__date">${tx.date}</span>
      `;
      txList.appendChild(li);
    });
  
    // 3) 내비게이션 활성화 토글
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', e => {
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
      });
    });
  
    // 4) 입금/이체 버튼 예시 이벤트
    document.querySelector('.btn.primary').addEventListener('click', () => {
      const amt = prompt('출금할 금액을 입력하세요:', '0');
      if (amt) alert(`요청하신 ${amt}원 출금 처리를 수행합니다.`);
    });
    document.querySelector('.btn.secondary').addEventListener('click', () => {
      alert('이체 페이지로 이동합니다.');
    });
  });
  