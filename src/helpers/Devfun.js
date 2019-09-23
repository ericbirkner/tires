export function fxPgIn(_el, _child, _param) {
  TweenMax.set(_el,{display:'block', onComplete: _param});
  if (_param) {
    // console.log('termino la animacion de ENTRADA done !!', done);
    TweenMax.staggerFrom(_child, 0.5, {y:"+=50", opacity:0}, 0.1);
  }
}

export function fxPgOut (_el, _child, _param) {
  // sale
  TweenMax.staggerTo(_child,0.5, {y:'100%', opacity:0, onComplete: _param}, 0.10);
  if (_param) {
    TweenMax.set(_el,{display:'none'});
  }

}





export function fxPgInSingle(_el, _param) {
  TweenMax.from(_el, 0.5,{ display:'block', y:'50%', opacity:0, onComplete: _param });
  if (_param) {
    // console.log('termino la animacion de ENTRADA done !!', done);
    // TweenMax.staggerFrom(_child, 0.5, {y:"+=50", opacity:0}, 0.1);
  }
}
