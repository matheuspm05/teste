function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('.btn-enviar');
  btn.textContent = '✓ Enviado! Entraremos em contato em breve.';
  btn.style.background = '#22c55e';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Enviar agendamento →';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 4000);
}