
/**
 * v-copy="'cha_zheng'"
 *<div style="display: none" id="cha_zheng" class="cha_zheng">{{ ZiChanCha.productNumber }}</div>
 */
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
    console.log('复制成功');
  }
  document.body.removeChild(input);
}
