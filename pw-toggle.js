(function(){

  function reveal(el){
    el.setAttribute('data-type-before-pw-toggle','password');
    el.type = 'text';
    return;
  }

  function conceal(el){
    el.removeAttribute('data-type-before-pw-toggle');
    el.type = 'password';
    return;
  }

  function toggle(i){
    if(i.type === 'password') reveal(i);
    else if(i.dataset.typeBeforePwToggle === 'password') conceal(i);
    return;
  }

  function execute(){
    var d = document,q = 'querySelectorAll';

    if(d[q] === undefined){
      [].map.call(d.getElementsByTagName('input'),toggle);
    }else{
      [].map.call(d[q]('input[type="password"],input[data-type-before-pw-toggle="password"]'),toggle);
    }
  }

  execute();

})();
