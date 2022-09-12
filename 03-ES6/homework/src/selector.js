var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para erteridentificar elementos que matchien
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)){
  resultSet.push(startEl)
  }
  for (const ele of startEl.children) {
    let elementos = traverseDomAndCollectElements(matchFunc, ele)
    resultSet = [...resultSet, ...elementos]
  }
  return resultSet
  }

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]=== "#") return "id";
  else if(selector[0]=== ".") return "class";
  else if(selector.includes(".")) return "tag.class";
  else return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
    if (selectorType === "id") {
      matchFunction = function(el){
        let selid = selector.replace("#", "")
        let ids = el.id
        return ids.toLowerCase() === selid.toLowerCase()
      }
    } else if (selectorType === "class") {
      matchFunction = function(el){
        let selcl = selector.replace(".", "")
        let clss = el.classList
        let cont = 0
        clss.forEach(element => {
          if(element.toLowerCase()=== selcl.toLowerCase())
          cont ++
        });
        return cont>0;
      }
      
    } else if (selectorType === "tag.class") {
      matchFunction = function(el){
        let sel = selector.split(".")
        let pri = sel[0];
        let sec = sel[1];
        let cont = 0
        if(pri.toLowerCase() === el.tagName.toLowerCase()){
        let clss = el.classList
      	clss.forEach(element => {
        if(element.toLowerCase() === sec.toLowerCase())
        cont ++
      	});
        }
        return cont>0;
      }
    } else if (selectorType === "tag") {
      matchFunction = function(el){
        return selector.toLowerCase() === el.tagName.toLowerCase()
      }
    }
    return matchFunction;
  };

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

