import MessageBoxVue from '@/components/MessageBox/index.js'


export default {

  mounted (el, binding) {

    el.addEventListener('click', () => {
      selectText(binding.value)
    })

  }
}
const selectText = (copy) => {

  let copyId = document.querySelector('#' + copy).innerHTML
  const input = document.createElement('input');
  document.body.appendChild(input);
  // let Mycopy = import.meta.env.VITE_APP_PC_URL + '?code=' + copyId;


  input.setAttribute('value', copyId);
  input.select();

  if (document.execCommand('copy')) {
    document.execCommand('copy');
    MessageBoxVue({
      title: '复制成功'
      // title: Mycopy
    })
  }
  document.body.removeChild(input);
}
